import { expect } from "@playwright/test";
import { test } from "../../MesFixtures/CrypteDecripte";
// Importation des fonctions `test` et `expect` de Playwright pour écrire et valider les tests.
import { faker } from "@faker-js/faker";
import { log } from "console";
//Importation de la bibliothèque Faker.js pour générer des données aléatoires (noms, dates, etc.).
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

test.afterEach("Après chaque bloc ", async ({ page , deconnection}) => {
console.log("execute moi après chaque bloc ");
  // Get the user dropdown image locator
   // Click on the user dropdown image
deconnection.DeConnexion();
  // Get the logout link locator
  deconnection.ConfirmaDeConnection();
  // Wait for the login page to load
  await expect(page.locator('h5.orangehrm-login-title')).toBeVisible();
});


test(" the fields with default values and seleond element", async ({
  page,
}) => {
    const baseUrl = process.env.BASE_URL; //
  const ulrrecrutemet = `${baseUrl}/web/index.php/recruitment/viewCandidates`;
  console.log(ulrrecrutemet);
  
  await page.goto(ulrrecrutemet);
  // Navigation vers la page des candidats dans l'application.
  await page.waitForTimeout(2000);
  await page.waitForURL(
    `${baseUrl}/web/index.php/recruitment/viewCandidates`
  );
  // Click on Candidates
  const candidatesButton = page.locator(".oxd-table-filter-header");
  // Localisation du bouton ou lien "Candidates" sur la page.
  await candidatesButton.click();
  // Clic sur le bouton "Candidates".
  await page.waitForTimeout(2000);
  // Fill in the fields with default values
  const jobTitleSelect = page.locator(".oxd-select-text-input").first();
  // Localisation du premier champ déroulant pour sélectionner un titre de poste.
  await jobTitleSelect.click();
  // Clic sur le champ déroulant pour l'ouvrir.
  const jobTitleOptions = await page.locator(".oxd-select-option").all();
//   for (const option of (jobTitleOptions)) {
//     console.log(await option.textContent());
//   }
  // Localisation de toutes les options disponibles dans le menu déroulant.
  await jobTitleOptions[1].click();
 /// Sélection de la deuxième option dans le menu déroulant.
  const vacancySelect = page.locator(".oxd-select-text").nth(1);
  //Localisation du deuxième champ déroulant pour sélectionner une vacance.
  await vacancySelect.click();
  // Clic sur le champ déroulant pour l'ouvrir.
  await page.getByRole('option', { name: 'Junior Account Assistant' }).click();
 
//   const vacancyOptions = page.locator(".oxd-select-option span").all();
//   for (const option of (vacancyOptions)) {
//     console.log(
//      await option.textContent())
//   }
//       // Localisation de toutes les options disponibles dans le menu déroulant.
//   await vacancyOptions[2].click();
  // Sélection de la deuxième option dans le menu déroulant.

  const hiringManagerSelect = page.locator(".oxd-select-text-input").nth(2);
  // Localisation du troisième champ déroulant pour sélectionner un responsable de recrutement.
  await hiringManagerSelect.click();
  // Clic sur le champ déroulant pour l'ouvrir.
//   const hiringManagerOptions = page.locator(".oxd-select-option").all();
//   // Localisation de toutes les options disponibles dans le menu déroulant.
//   await hiringManagerOptions[1].click();
//   // Sélection de la deuxième option dans le menu déroulant.
await page.getByRole('option', { name: 'Rahul Patil' }).click();
  const statusSelect = page.locator(".oxd-select-text-input").nth(3);
  // Localisation du quatrième champ déroulant pour sélectionner un statut.
  await statusSelect.click();
//   // Clic sur le champ déroulant pour l'ouvrir.
//   const statusOptions = page.locator(".oxd-select-option").all();
//   // Localisation de toutes les options disponibles dans le menu déroulant.
//   await statusOptions[1].click();
//   // Sélection de la deuxième option dans le menu déroulant.
await page.getByRole('option', { name: 'Shortlisted' }).click();
  const candidateNameInput =await page.getByRole('textbox', { name: 'Type for hints...' });
  console.log(`Nom du candidat généré : ${faker.person.fullName()}`);
  
  // Localisation du champ de texte pour saisir le nom du candidat.
  await candidateNameInput.fill(faker.person.fullName());
  // Remplissage du champ avec un nom généré aléatoirement par Faker.js.

  const keywordsInput = page.locator(
    'input[placeholder="Enter comma seperated words..."]'
  );
  // Localisation du champ de texte pour saisir des mots-clés.
  await keywordsInput.fill(faker.lorem.words(5));
  // Remplissage du champ avec cinq mots générés aléatoirement par Faker.js.

  const dateOfApplicationFromInput = page.locator('input[placeholder="From"]');
  // Localisation du champ de texte pour saisir la date de début de candidature.
  await dateOfApplicationFromInput.fill(
    faker.date.past().toISOString().split("T")[0]
  );
  // Remplissage du champ avec une date passée générée aléatoirement par Faker.js (format ISO).

  const dateOfApplicationToInput = page.locator('input[placeholder="To"]');
  // Localisation du champ de texte pour saisir la date de fin de candidature.
  await dateOfApplicationToInput.fill(
    faker.date.recent().toISOString().split("T")[0]
  );
  // Remplissage du champ avec une date récente générée aléatoirement par Faker.js (format ISO).

  const methodOfApplicationSelect = page
    .locator(".oxd-select-text-input")
    .nth(4);
  // Localisation du cinquième champ déroulant pour sélectionner une méthode de candidature.
  await methodOfApplicationSelect.click();
  // Clic sur le champ déroulant pour l'ouvrir.
  //const methodOfApplicationOptions = page.locator(".oxd-select-option").all();
  // Localisation de toutes les options disponibles dans le menu déroulant.
 // await methodOfApplicationOptions[1].click();
  await page.getByRole('option', { name: 'Manual' }).click();
  // Sélection de la deuxième option dans le menu déroulant.

  // Submit the form
  const submitButton = page.getByRole("button", { name: "Search" });
  // Localisation du bouton "Search" pour soumettre le formulaire.
  await submitButton.click();
  // Clic sur le bouton "Search".

  // Validate the action
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
  );
  //Validation que l'URL actuelle correspond à l'URL attendue après la soumission du formulaire.
});
