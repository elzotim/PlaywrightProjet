import { Locator, Page, expect } from "@playwright/test";

// Classe représentant la page de connexion
export class BuzzPage {
  readonly page: Page;
  readonly Newpage: Page; // Nouvelle page ouverte
  readonly BuzzPages: Locator;
  readonly ConfirmationBuzzPage: Locator; // Champ pour le mot de passe
  readonly sharePhotosButton: Locator; // Bouton de partage de photos
  readonly dialoge: Locator; // Bouton de connexion
  readonly choosFilebouton: Locator; //confirmation de la connection
  readonly uploadfichier: Locator;
  readonly description: Locator;
  readonly shareButton: Locator;
  constructor(page: Page) {
    this.page = page;
    // Sélection des éléments par leur rôle et nom accessible

    this.BuzzPages = page.getByRole("link", { name: "Buzz" });
    this.ConfirmationBuzzPage = page.getByRole("heading", { name: "Buzz" });
    this.sharePhotosButton = page.getByRole("button", { name: "Share Photos" });
    this.dialoge = page.getByRole("dialog").locator("i");
    this.uploadfichier = page.getByRole("button", { name: "Choose File" });
    this.description = page
      .getByRole("dialog")
      .getByRole("textbox", { name: "What's on your mind?" });
    this.shareButton = page.getByRole("button", { name: "Share" });
  }
  // Méthode pour naviguer vers une URL spécifique

  async BuzzPage() {
    console.log(this.page.url()); // Afficher l'URL actuelle de la page
    await this.BuzzPages.waitFor({ state: "visible" }); // Attendre que le lien soit visible
  }
  async uploadImage() {
    // Prépare l'écoute d'un événement d'ouverture de nouvelle page
    await this.sharePhotosButton.click(); // Cliquer sur "Share Photos"
       await this.description.fill("Bonjour tout le monde"); // Remplir le champ de description
    // Clique sur un élément pour ouvrir une nouvelle pag

    // Récupère la nouvelle page qui s'est ouverte
    await this.dialoge.click(); // Cliquer sur "Share Photos"
    // Clique sur un bouton dans la nouvelle page
    await this.uploadfichier.setInputFiles("Images/Capture.jpg"); 
    await this.page.waitForTimeout(1000);
     // Vérifier que l'image est visible
   await this.page.waitForTimeout(1000);
 await this.shareButton.nth(1).click(); // Cliquer sur le bouton "Share"
  }
}
