import { Locator, Page } from "@playwright/test";

// Classe représentant la page de connexion
export class Deconnection {
    readonly page: Page;
    readonly userDropdownImage : Locator;      // profil user
    readonly logoutLink: Locator;      // logout pour se deconnecter
    constructor(page: Page) {
        this.page = page;
        // Sélection des éléments par leur rôle et nom accessible
      this.userDropdownImage = page.locator('.oxd-userdropdown-img');
      this.logoutLink = page.locator('text="Logout"');
    }
  
    // Méthode pour se deconnecter avec un nom d'utilisateur 
    async DeConnexion(){
        await this.userDropdownImage.click(); // Cliquer sur l'image de profil
        await this.logoutLink.waitFor({ state: 'visible' }) 
         await this.logoutLink.click();    // Cliquer sur "Loginout"
    }

    async ConfirmaDeConnection(){
        await this.userDropdownImage.waitFor({ state: 'hidden' }) // Attendre que l'image de profil soit cachée
        await this.logoutLink.waitFor({ state: 'hidden' }) // Attendre que le lien de déconnexion soit caché
        }
    }

