import { test, chromium, expect } from '@playwright/test';
import { Connection } from '../LesPages/ConnnexionPage';
test('Saisi usename et MDP et clique sur le bouton connecte et a', async ({ page }) => {
////////////////////////////////////////////////////////////////////
    //const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    //const ConnectionPage  = new Connection(page);
    //await ConnectionPage.UrlOrangeHrm(process.env.B);
    //await ConnectionPage.Connexion("Admin", "admin123");
    //await expect(ConnectionPage.ConfirmeConnection).toHaveText("Dashboard")
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);
   await page.pause()
});
