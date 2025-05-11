import { test } from "../../MesFixtures/CrypteDecripte";
import { expect } from "@playwright/test";
import loginModuleData from "../../Data/data.json";
test(
  "[Login] Verify that the user cannot log in with an invalid password.",
  {
    tag: ["@Connection", "@rec"],
    annotation: {
      type: "invalid password",
      description:
        "https://github.com/yash-makadia/Orange-HRM-Testing/blob/master/My%20Test%20Cases.xlsx",
    },
  },
  async ({ connection, commonUtils }) => {
    await test.step("Etape 1 : aller sur l'url de connexion", async () => {
      console.log("Etape 1 : aller sur l'url de connexion");
      const baseUrl = process.env.BASE_URL; //
      const url = `${baseUrl}/web/index.php/auth/login`;
      console.log(url);
      connection.UrlOrangeHrm(url);
    });
    await test.step("Etape 2 : recuperer le mot de passe wrog et username et se connecter", async () => {
      await connection.Connexion(
        process.env.USER_NAME!,
        loginModuleData.wrong_password
      );
    });
    await test.step("Etape 3 :verification du message d'erreur", async () => {
      await expect(connection.invalidCredentialsErrorPopup).toHaveText(
        loginModuleData.invalid_credentials_text
      );
    });
  }
);

test(
  "[Login] Verify that the user cannot log in with an invalid username.",
  {
    tag: ["@Connection", "@rec"],
    annotation: {
      type: "invalid identifiant",
      description:
        "https://github.com/yash-makadia/Orange-HRM-Testing/blob/master/My%20Test%20Cases.xlsx",
    },
  },
  async ({ connection, commonUtils }) => {
    await test.step("Etape 1 : aller sur l'url de connexion", async () => {
      console.log("Etape 1 : aller sur l'url de connexion");
      const baseUrl = process.env.BASE_URL; //
      const url = `${baseUrl}/web/index.php/auth/login`;
      console.log(url);
      connection.UrlOrangeHrm(url);
    });
    await test.step("Etape 2 : recuperer le mot de passe et username wrong et se connecter", async () => {
      const password = commonUtils.decryptData(process.env.PASSWORD!);
      await connection.Connexion(loginModuleData.wrong_username, password);
    });
    await test.step("Etape 3 :verification du message d'erreur", async () => {
      await expect(connection.invalidCredentialsErrorPopup).toHaveText(
        loginModuleData.invalid_credentials_text
      );
    });
  }
);

// Troisième test : Vérifie que l'utilisateur ne peut pas se connecter avec un nom d'utilisateur ET un mot de passe invalides
test(
  "[Login] Verify that the user cannot log in with both an invalid username and password.",
  {
    tag: ["@Connection", "@rec"],
    annotation: {
      type: "invalid identifiant et password",
      description:
        "https://github.com/yash-makadia/Orange-HRM-Testing/blob/master/My%20Test%20Cases.xlsx",
    },
  },
  async ({ connection, commonUtils }) => {
    test.step("Etape 1 : aller sur l'url de connexion", async () => {
      const baseUrl = process.env.BASE_URL; //
      const url = `${baseUrl}/web/index.php/auth/login`;
      connection.UrlOrangeHrm(url);
    });
    test.step("Etape 2 : recuperer le mot de passe et username wrong et se connecter", async () => {
      await connection.Connexion(
        loginModuleData.wrong_username,
        loginModuleData.wrong_password
      );
    });
    await test.step("Etape 3 :verification du message d'erreur", async () => {
      // Vérifie que le message d'erreur correspondant s'affiche
      await expect(connection.invalidCredentialsErrorPopup).toHaveText(
        loginModuleData.invalid_credentials_text
      );
      await expect(connection.LoginText).toBeVisible();
      await expect(connection.LoginText).toHaveText(loginModuleData.login_text);
    });
  }
);
