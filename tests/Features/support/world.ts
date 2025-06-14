import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Page, Browser } from 'playwright';

class CustomWorld extends World {
  page!: Page;
  browser!: Browser;

  async openBrowser() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.page?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);