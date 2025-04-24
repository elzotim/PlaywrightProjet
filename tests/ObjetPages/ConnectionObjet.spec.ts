import { chromium, expect } from '@playwright/test';
import {test } from "../../MesFixtures/ConnectionFixzture"
test('Saisi usename et MDP et clique sur le bouton connecte et a', async ({ page,connection,commonUtils }) => {
////////////////////////////////////////////////////////////////////
    const url = process.env.BASE_URL as string;
    const mdp = process.env.PASSWORD as string;
    await connection.UrlOrangeHrm(url);
    page.pause();
   // console.log((mdp));
  console.log(commonUtils.decryptData(mdp));
  await connection.Connexion(process.env.USER_NAME as string ,commonUtils.decryptData(mdp) );
  //await connection.Connexion(process.env.USER_NAME as string ,process.env.PASSWORD! )
 await expect(connection.ConfirmeConnection).toHaveText("Dashboard")
   page.pause();
});
