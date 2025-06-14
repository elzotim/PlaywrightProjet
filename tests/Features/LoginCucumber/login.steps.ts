import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page, Browser } from 'playwright';
import { chromium } from 'playwright';

let page: Page;
let browser: Browser;
Given('l\'utilisateur est sur la page de connexion', async () => {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/');
});


When('il saisit le nom d\'utilisateur {string}', async (username: string) => {
  await page.fill('input[name="username"]', username);
});

When('il saisit le mot de passe {string}', async (password: string) => {
  await page.fill('input[name="password"]', password);
});

When('il clique sur le bouton {string}', async (buttonLabel: string) => {
  await page.click('button[type="submit"]');
});

Then('il doit voir le tableau de bord', async () => {
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

After(async () => {
  await browser.close();
});