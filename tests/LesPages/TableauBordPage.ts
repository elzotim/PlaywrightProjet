import { Locator,expect,  Page } from "@playwright/test";

// Classe représentant la page de connexion
export class TableauBordPage {
    readonly page: Page;
    readonly dasheboardText: Locator;      // Champ pour le nom d'utilisateur

    constructor(page: Page) {
        this.page = page;
        // Sélection des éléments par leur rôle et nom accessible
        this.dasheboardText = page.getByRole('heading', { name: 'Dashboard' });
    }
    // Méthode pour naviguer vers une URL spécifique
    /**@param url  */
    async UrlOrangeHrm(url: string) {
        await this.page.goto(url);
    }
   

    async ConfirmaConnection(){
       await expect(this.dasheboardText).toHaveText("Dashboard");
    }
}

