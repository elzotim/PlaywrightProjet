import { Locator, Page } from "@playwright/test";

// Classe représentant la page de connexion
export class UserDuSysteme {
    readonly page: Page;
    readonly cheBoxButton: Locator;      // Champ pour le nom d'utilisateur
    readonly deleteButon: Locator;      // Champ pour le mot de passe
    constructor(page: Page) {
        this.page = page;
        // Sélection des éléments par leur rôle et nom accessible
        this.cheBoxButton = page.locator('.oxd-checkbox-input-icon'); // Sélectionne la case à cocher
        this.deleteButon = page.getByRole('textbox', { name: 'Password' });
    }
    // Méthode pour naviguer vers une URL spécifique
    async checkeretdeleter() {
        const elementsCount = await this.cheBoxButton.count();
        console.log(`Nombre d'éléments trouvés : ${elementsCount}`); 
        for (let index = 1; index <= 2; index++) {
            console.log(`Nombre d'éléments trouvés : ${elementsCount}`); 
            await this.cheBoxButton.nth(index).check(); // Clique sur la case à cocher
            await this.page.waitForTimeout(1000); 
            await this.page.getByRole('button', { name: ' Delete Selected' }) // Clique sur le bouton de suppression
        }//
    }

}

