import {  expect} from "@playwright/test";
import {test } from "../../MesFixtures/CrypteDecripte";
test.beforeEach("Avant tout bloc ", async ({ connection, commonUtils }) => {
  console.log("execute moi avant chaque bloc ");
  // Navigate to the page
  // Récupération de l'URL de base depuis les variables d'environnement
  const baseUrl = process.env.BASE_URL; //

  // Concaténation de l'URL de base avec le chemin de connexion
  const url = `${baseUrl}/web/index.php/auth/login`;
  console.log(url);

  // Récupération du mot de passe chiffré depuis les variables d'environnement

  // Navigation vers l'URL de connexion
  await connection.UrlOrangeHrm(url);
  //   // Connexion avec le nom d'utilisateur et le mot de passe déchiffré
 const mdp = process.env.PASSWORD! ;
  await connection.Connexion(
    process.env.USER_NAME!,
    commonUtils.decryptData(mdp)
  );
});

test('Telecharger une image depuis le local ', async ({ page,buzzPage }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz");
   await buzzPage.BuzzPage(); // Ensure BuzzPages is a method and properly awaited
   await buzzPage.uploadImage();
  })
 