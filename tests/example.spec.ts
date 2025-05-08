import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('click on Share Photos button and upload an image', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');

  // Wait for the Share Photos button to be visible
  const sharePhotosButton = page.getByRole('button', { name: 'Share Photos' });
  await sharePhotosButton.waitFor();

  // Click on the Share Photos button
  await sharePhotosButton.click();

  // Wait for the file input to be visible
  const fileInput = page.getByRole('button', { name: 'Upload Files' });
  await fileInput.waitFor();

  // Upload an image
  const imagePath = 'path/to/image.jpg'; // Replace with a valid image path
  await fileInput.setInputFiles(imagePath);

  // Wait for the image to be uploaded
  await page.waitForTimeout(1000); // Adjust the timeout as needed

  // Verify that the image is uploaded successfully
  const uploadedImage = page.locator('.uploaded-image');
  await expect(uploadedImage).toBeVisible();
});
