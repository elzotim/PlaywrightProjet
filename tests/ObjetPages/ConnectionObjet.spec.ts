import { log } from "console";
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

test('informations du dashborad', async ({ page,connection,recrutementPage,commonUtils,tableauBordPage }) => {
        // Vérification que le texte "Dashboard" est présent après la connexion
       await expect(connection.ConfirmationConnection).toHaveText("Dashboard");
        // Vérification que le texte "Dashboard" est présent après la connexion en utilisant la page tableauBordPage
        await expect(tableauBordPage.dasheboardText).toHaveText("Dashboard");
   console.log(await page.title());
   console.log(await page.url());
   
   // Navigation vers la section "Recruitment"
    await recrutementPage.navigateToRecruitment();
    console.log(page.url());
    // Sélectionnez "Junior Account Assistant"
    await recrutementPage.selectAccountAssistant();
    // Remplissez les champs de texte
    await recrutementPage.fillTypeForHints('Gautham Raj R');
    await recrutementPage.fillCommaSeparatedWords('esde');
    // Sélectionnez une date
    await recrutementPage.selectFromDate('20');
    // Cliquez sur le bouton "Search"
    await recrutementPage.clickSearchButton();
  })
  test('renseigner les informations recrutement', async ({ page,connection,recrutementPage,commonUtils,tableauBordPage }) => {
    ////////////////////////////////////////////////////////////////////
  const baseUrl = process.env.BASE_URL as string;
const url = `${baseUrl}/web/index.php/auth/login`; // Concaténation de l'URL
    // Navigation vers l'URL de connexion
    await connection.UrlOrangeHrm(url);
    console.log(await page.url());
       await expect(connection.ConfirmationConnection).toHaveText("Dashboard");
        // Navigation vers la section "Recruitment"
    await recrutementPage.navigateToRecruitment();
    console.log(page.url());
     await   page.close();
      });