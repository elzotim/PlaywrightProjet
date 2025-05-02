// import { expect } from "@playwright/test";
// import { test } from "../../MesFixtures/CrypteDecripte";
// import fs from "fs";
// test("les variables glogales ", async ({
//   page,
//   connection,
//   commonUtils,
//   tableauBordPage,
// }) => {
//   ////////////////////////////////////////////////////////////////////
//   // Récupération de l'URL de base depuis les variables d'environnement
//   const baseUrl = process.env.BASE_URL as string;

//   // Concaténation de l'URL de base avec le chemin de connexion
//   const url = `${baseUrl}/web/index.php/auth/login`;
//   console.log(url);

//   // Récupération du mot de passe chiffré depuis les variables d'environnement
//   const mdp = process.env.PASSWORD as string;

//   // Navigation vers l'URL de connexion
//   await connection.UrlOrangeHrm(url);

//   // Connexion avec le nom d'utilisateur et le mot de passe déchiffré
//   await connection.Connexion(
//     process.env.USER_NAME as string,
//     commonUtils.decryptData(mdp)
//   );
//   // Attente que l'URL finale soit celle du tableau de bord
//   await page.waitForURL(`${baseUrl}/web/index.php/dashboard/index`);
//   const sessionStatePath = "./Playwright/.auth/auth.json"; // Chemin du fichier pour sauvegarder l'état
//   // Sauvegarde de l'état de la session (cookies et localStorage)
//   await page.context().storageState({ path: sessionStatePath });
// });
