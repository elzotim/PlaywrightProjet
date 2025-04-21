import { test, chromium, expect } from '@playwright/test';

test('Saisi usename et MDP et clique sur le bouton connecte et a', async ({ page }) => {
////////////////////////////////////////////////////////////////////
  
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);
   await page.pause()
});
