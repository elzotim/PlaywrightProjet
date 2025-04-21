import { Locator, Page } from "@playwright/test";

// Classe représentant la page de connexion
export class Connection {
    readonly page: Page;
    readonly UserNameSaisi: Locator;      // Champ pour le nom d'utilisateur
    readonly PassWordSaisi: Locator;      // Champ pour le mot de passe
    readonly BoutonConnecte: Locator;     // Bouton de connexion
    readonly ConfirmeConnection : Locator //confirmation de la connection 
    constructor(page: Page) {
        this.page = page;
        // Sélection des éléments par leur rôle et nom accessible
        this.UserNameSaisi = page.getByRole('textbox', { name: 'Username' });
        this.PassWordSaisi = page.getByRole('textbox', { name: 'Password' });
        this.BoutonConnecte = page.getByRole('button', { name: 'Login' });
        this.ConfirmeConnection = page.locator('div').filter({ hasText: /^Dashboard$/ })
    }
    // Méthode pour naviguer vers une URL spécifique
    /**@param url  */
    async UrlOrangeHrm(url: string) {
        await this.page.goto(url);
    }
    // Méthode pour se connecter avec un nom d'utilisateur et un mot de passe
    /**
     * @param MdpValeur
     * @param UserNameValeur 
     *   */
    async Connexion(UserNameValeur: string, MdpValeur: string) {
        await this.UserNameSaisi.fill(UserNameValeur);   // Remplir le champ "Username"
        await this.PassWordSaisi.fill(MdpValeur);        // Remplir le champ "Password"
        await this.BoutonConnecte.click();               // Cliquer sur "Login"
    }

    async ConfirmaConnection(textContent: string){
        await this.ConfirmeConnection.click();
    }
}

