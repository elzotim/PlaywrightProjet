import {  expect} from "@playwright/test";
import {test } from "../../MesFixtures/CrypteDecripte";
test.beforeEach("Avant tout bloc ", async ({ connection, commonUtils }) => {
  await test.step("Etape 1 : aller sur l'url de connexion", async () => {
    console.log("Etape 1 : aller sur l'url de connexion");
    console.log("execute moi avant chaque bloc ");
    const baseUrl = process.env.BASE_URL; //
    const url = `${baseUrl}/web/index.php/auth/login`;
    console.log(url);
    await connection.UrlOrangeHrm(url);
  });
  await test.step("Etape 2 : recuperer le mot de passe chiffré et username et se connecter", async () => {
    const mdp = process.env.PASSWORD!;
    await connection.Connexion(
      process.env.USER_NAME!,
      commonUtils.decryptData(mdp)
    );
  });
  await test.step("Etape 3 : confirmation de la", async () => {
    await connection.ConfirmaConnection()
});

});
test('supprimer des user du system  ', 
  {
    tag : ["@usersystem", "@rec"],
    annotation: {
      type: " cas de test1",
      description: "https://github.com/yash-makadia/Orange-HRM-Testing/blob/master/My%20Test%20Cases.xlsx"
    }
}
,async ({ page,userDuSysteme }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
   await userDuSysteme.checkeretdeleter(); // Ensure BuzzPages is a method and properly awaited
   await page.waitForTimeout(1000); // Attendre que la case à cocher soit cochée
  })
 