import { expect } from "@playwright/test";
import { test } from "../../MesFixtures/CrypteDecripte";
import { faker } from "@faker-js/faker";
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
  await test.step("Etape 3 : confirmation de la connection ", async () => {
  await  connection.ConfirmaConnection()
  });
});

test.afterEach("Après chaque bloc ", async ({ page, deconnection }) => {
  console.log("execute moi après chaque bloc ");
  await test.step("Etape 1 : appuyer sur le bouton de la deconnexion", async () => {
    console.log("Etape 1 : aller sur l'url de deconnexion");
    await deconnection.DeConnexion();
    await deconnection.ConfirmaDeConnection();
    await expect(page.locator("h5.orangehrm-login-title")).toBeVisible();
  });
});

test(
  " Recrutement : Aller dans la Page recrutement et renseigner les informations du candidat ",
  {
    tag: ["@recrutement", "@rec"],
    annotation: {
      type: "le recrutement",
      description:
        "https://github.com/yash-makadia/Orange-HRM-Testing/blob/master/My%20Test%20Cases.xlsx",
    },
  },
  async ({ page }) => {
    await test.step("Etape 1 : aller sur l'url de recrutement", async () => {
      const baseUrl = process.env.BASE_URL; //
      const ulrrecrutemet = `${baseUrl}/web/index.php/recruitment/viewCandidates`;
      console.log(ulrrecrutemet);
      await page.goto(ulrrecrutemet);
      await page.waitForTimeout(2000);
      await page.waitForURL(
        `${baseUrl}/web/index.php/recruitment/viewCandidates`
      );
    });
    await test.step("Etape 2 : remplir les champs et choisir un element dans les menu deroulant", async () => {
      await page.waitForTimeout(2000);
      const candidatesButton = page.locator(".oxd-table-filter-header");
      await candidatesButton.click();
      await page.waitForTimeout(2000);
      const jobTitleSelect = page.locator(".oxd-select-text-input").first();
      await jobTitleSelect.click();
      const jobTitleOptions = await page.locator(".oxd-select-option").all();
      //   Methodes alternative pour selectionner une option dans le menu deroulant
      //  for (const option of (jobTitleOptions)) {
      //     //console.log(await option.textContent());
      //   }
      // Localisation de toutes les options disponibles dans le menu déroulant.

      await jobTitleOptions[1].click();
      const vacancySelect = page.locator(".oxd-select-text").nth(1);
      await vacancySelect.click();
      await page
        .getByRole("option", { name: "Junior Account Assistant" })
        .click();
      //  Methosde alternative pour selectionner une option dans le menu deroulant
      //  const vacancyOptions = page.locator(".oxd-select-option span").all();
      //   for (const option of (vacancyOptions)) {
      //     console.log(
      //      await option.textContent())
      //   }
      //       // Localisation de toutes les options disponibles dans le menu déroulant.
      //   await vacancyOptions[2].click();
      // Sélection de la deuxième option dans le menu déroulant.
      const hiringManagerSelect = page.locator(".oxd-select-text-input").nth(2);
      await hiringManagerSelect.click(); // Ouvrir le menu déroulant
      const hiringManagerOptions = page.locator(".oxd-select-option");
      await hiringManagerOptions.nth(1).click();
      const statusSelect = page.locator(".oxd-select-text-input").nth(3);
      // Localisation du quatrième champ déroulant pour sélectionner un statut.
      await statusSelect.click();
      //   // Clic sur le champ déroulant pour l'ouvrir.
      //   const statusOptions = page.locator(".oxd-select-option").all();
      //   // Localisation de toutes les options disponibles dans le menu déroulant.
      //   await statusOptions[1].click();
      //   // Sélection de la deuxième option dans le menu déroulant.
      await page.getByRole("option", { name: "Shortlisted" }).click();
      const candidateNameInput = await page.getByRole("textbox", {
        name: "Type for hints...",
      });
      console.log(`Nom du candidat généré : ${faker.person.fullName()}`);
      await candidateNameInput.fill(faker.person.fullName());
      const keywordsInput = page.locator(
        'input[placeholder="Enter comma seperated words..."]'
      );
      await keywordsInput.fill(faker.lorem.words(5));
      const dateOfApplicationFromInput = page.locator(
        'input[placeholder="From"]'
      );
      await dateOfApplicationFromInput.fill(
        faker.date.past().toISOString().split("T")[0]
      );
      const dateOfApplicationToInput = page.locator('input[placeholder="To"]');
      await dateOfApplicationToInput.fill(
        faker.date.recent().toISOString().split("T")[0]
      );

      const methodOfApplicationSelect = page
        .locator(".oxd-select-text-input")
        .nth(4);
      await methodOfApplicationSelect.click();
      //Methodes alternative pour selectionner une option dans le menu deroulant
      //const methodOfApplicationOptions = page.locator(".oxd-select-option").all();
      // Localisation de toutes les options disponibles dans le menu déroulant.
      // await methodOfApplicationOptions[1].click();
      await page.getByRole("option", { name: "Manual" }).click();
    });
    await test.step("Etape 3 : soumettre le formulaire", async () => {
      const submitButton = page.getByRole("button", { name: "Search" });
      await submitButton.click();
      await page.waitForTimeout(2000);
    });

    await test.step("Etape 4 : validation de l'URL après la soumission du formulaire", async () => {
      await expect(page).toHaveURL(
        "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
      );
    });
  }
);
