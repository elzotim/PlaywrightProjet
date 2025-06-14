import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When(`il saisit le nom d'utilisateur valide {string}`, async function (username: string) {
  await this.page.fill('input[name="username"]', username);
});

When(`il saisit un mot de passe invalide {string}`, async function (password: string) {
  await this.page.fill('input[name="password"]', password);
});

When(`il clique sur le bouton {string}`, async function () {
  await this.page.click('button[type="submit"]');
});

Then(`un message d'erreur {string} doit s'afficher`, async function (msg: string) {
  await expect(this.page.getByText(msg)).toBeVisible();
});

When(`il saisit un nom d'utilisateur invalide {string}`, async function (username: string) {
  await this.page.fill('input[name="username"]', username);
});

When(`il saisit le mot de passe valide {string}`, async function (password: string) {
  await this.page.fill('input[name="password"]', password);
});

When(`il saisit un mot de passe invalide`, async function () {
  await this.page.fill('input[name="password"]', 'invalidPassword');
});

Then(`le texte {string} doit être visible sur la page`, async function (text: string) {
  await expect(this.page.getByText(text)).toBeVisible();
});