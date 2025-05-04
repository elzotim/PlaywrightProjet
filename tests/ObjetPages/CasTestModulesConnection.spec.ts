// Importation des modules nécessaires
// 'test' et 'expect' viennent d'un fichier de configuration de tests (Playwright)
// 'loginModuleData' contient les données de test (identifiants, mots de passe, messages d'erreur, etc.)
import {test } from "../../MesFixtures/CrypteDecripte";
import { expect } from "@playwright/test";
import loginModuleData from '../../Data/data.json';
// Premier test : Vérifie que l'utilisateur ne peut pas se connecter avec un mot de passe invalide
test('[Login] Verify that the user cannot log in with an invalid password.', async ({ connection , commonUtils }) => {
    // Récupération du nom d'utilisateur valide à partir des variables d'environnement
  const baseUrl = process.env.BASE_URL; //

  // Concaténation de l'URL de base avec le chemin de connexion
  const url = `${baseUrl}/web/index.php/auth/login`;
  console.log(url);
  connection.UrlOrangeHrm(url);
  //   // Connexion avec le nom d'utilisateur et le mot de passe déchiffré
  await connection.Connexion(
    process.env.USER_NAME!,
    loginModuleData.wrong_password
  );
  // Vérifie que le message d'erreur correspondant s'affiche
  await expect(connection.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
  
});

// Deuxième test : Vérifie que l'utilisateur ne peut pas se connecter avec un nom d'utilisateur invalide
test('[Login] Verify that the user cannot log in with an invalid username.', async ({ connection , commonUtils }) => {
    // Récupération du mot de passe correct depuis les variables d'environnement
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    const baseUrl = process.env.BASE_URL; //

    // Concaténation de l'URL de base avec le chemin de connexion
    const url = `${baseUrl}/web/index.php/auth/login`;
    console.log(url);
    connection.UrlOrangeHrm(url);
    // Tentative de connexion avec un mauvais nom d'utilisateur et un bon mot de passe
    await connection.Connexion(loginModuleData.wrong_username, password);

    // Vérifie que le message d'erreur est bien celui attendu
    await expect(connection.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);

});

// Troisième test : Vérifie que l'utilisateur ne peut pas se connecter avec un nom d'utilisateur ET un mot de passe invalides
test('[Login] Verify that the user cannot log in with both an invalid username and password.',  async ({ connection , commonUtils }) => {
    // Récupération du nom d'utilisateur valide à partir des variables d'environnement
  const baseUrl = process.env.BASE_URL; //

  // Concaténation de l'URL de base avec le chemin de connexion
  const url = `${baseUrl}/web/index.php/auth/login`;

  // Concaténation de l'URL de base avec le chemin de connexion
  connection.UrlOrangeHrm(url);
  //   // Connexion avec le nom d'utilisateur et le mot de passe déchiffré
  await connection.Connexion(
    loginModuleData.wrong_username,
    loginModuleData.wrong_password
  );
  // Vérifie que le message d'erreur correspondant s'affiche
  await expect(connection.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
  await expect(connection.LoginText).toBeVisible();
  await expect(connection.LoginText).toHaveText(loginModuleData.login_text);
});