import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
//const envName = process.env.ENV_NAME || 'rec'; // valeur par défaut
dotenv.config({
  path:  process.env.ENV_NAME?
   `./env-files/.env.${process.env.ENV_NAME}`:
   `./env-files/.env.dev`
});


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/ObjetPages', // Répertoire contenant les tests
  
  //chemin pour crypter MOt de pass et pour executer sur git bash 
  // SECRET_KEY=hafsa npm run ExecRecchromeui
  //testDir: './utils',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:  [['html', {open :'always'}], ['github', { output: 'playwright-report' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
   // baseURL: process.env.BASE_URL, // URL de base pour vos tests
   // storageState: './Playwright/.auth/auth.json', // Charger l'état de la session sauvegardée
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless : true , 
    screenshot:'only-on-failure',
   video : 'retain-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute : 'data-test',
  
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'Setup',
    //  testMatch:'./LesVGlobal.spec.ts',
    // },
    {
      name: 'chromium',
   // dependencies : ['Setup'],
      use: { ...devices['Desktop Chrome'] ,
    //  storageState: './Playwright/.auth/auth.json',
      },
    },

   // {
   //   name: 'firefox',
   //   dependencies : ['auth'],
   //   use: { ...devices['Desktop Firefox'],
   //     storageState: 'sessionState.json', },
   // },
//
   // {
   //   name: 'webkit',
   //   dependencies : ['auth'],
   //   use: { ...devices['Desktop Safari'] ,
   //     storageState: 'sessionState.json',},
   //   
   // },

    /* Test against mobile viewports. */
    //{
    //   name: 'Mobile Chrome',
    //dependencies : ['auth'],
    //   use: { ...devices['Pixel 5'] ,
        // storageState: 'sessionState.json', },
    // },
    // {
    //   name: 'Mobile Safari',
     //dependencies : ['auth'],
    //   use: { ...devices['iPhone 12'],
        // storageState: 'sessionState.json', },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
     //dependencies : ['auth'],
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
     //dependencies : ['auth'],
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
