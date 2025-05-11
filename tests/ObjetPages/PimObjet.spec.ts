import { expect } from "@playwright/test";
import { test } from "../../MesFixtures/CrypteDecripte";
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
   await connection.ConfirmaConnection();
});

});
test(" Aller dans la Page pim et cliquer sur add et renseigne les informations du  nouvel employé",
  {
    tag : ["@pim", "@rec"],
    annotation: {
      type: "nouvel employé",
      description: "https://github.com/yash-makadia/Orange-HRM-Testing/blob/master/My%20Test%20Cases.xlsx"
    }
},
  async ({
  page,pim
}) => {
  
  await test.step("Etape 1 : aller sur l'url de pim", async () => {
    await pim.Pimpage();
    await page.waitForTimeout(2000);
  });
  await test.step("Etape 2 : ouvrir le popup de telechargement de l'image", async () => {
    await pim.Addclick(); 
    await page.waitForTimeout(2000);
});
  await test.step("Etape 3 : renseigner le champ de saisi et Telecharger une image depuis le local", async () => {
    await page.waitForTimeout(2000); 
    await pim.allName();
  });
  await test.step("Etape 4 : Telecharger une image depuis le local", async () => {
    await page.waitForTimeout(2000); // Attendre que la page soit complètement chargée
    await pim.dprofilpicture(); // Appeler la méthode save pour enregistrer les informations de l'employé

  });
});
