import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given("l'utilisateur est sur la page de connexion", async function () {
  await this.page.goto(process.env.BASE_URL + '/web/index.php/auth/login');
});

When('il saisit le nom d\'utilisateur {string}', async function (username: string) {
  await this.page.getByPlaceholder('Username').fill(username);
});

When('il saisit le mot de passe {string}', async function (password: string) {
  await this.page.getByPlaceholder('Password').fill(password);
});

When('il clique sur le bouton "Login"', async function () {
  await this.page.getByRole('button', { name: 'Login' }).click();
});

Then('il doit voir le tableau de bord', async function () {
  await expect(this.page.getByText('Dashboard')).toBeVisible();
});

Then('un message d\'erreur "Invalid credentials" doit s\'afficher', async function () {
  await expect(this.page.getByText('Invalid credentials')).toBeVisible();
});