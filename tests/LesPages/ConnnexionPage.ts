import { Locator, Page } from "@playwright/test";

// Classe représentant la page de connexion
export class Connection {
    readonly page: Page;
    readonly UserNameSaisi: Locator;      // Champ pour le nom d'utilisateur
    readonly PassWordSaisi: Locator;      // Champ pour le mot de passe
    readonly BoutonConnecte: Locator;     // Bouton de connexion
    readonly ConfirmationConnection : Locator //confirmation de la connection 
    readonly invalidCredentialsErrorPopup: Locator; // Erreur de connexion invalide
    readonly LoginText  : Locator; // Login pour se connecter
    constructor(page: Page) {
        this.page = page;
        // Sélection des éléments par leur rôle et nom accessible
        this.UserNameSaisi = page.getByRole('textbox', { name: 'Username' });
        this.PassWordSaisi = page.getByRole('textbox', { name: 'Password' });
        this.BoutonConnecte = page.getByRole('button', { name: 'Login' });
        this.ConfirmationConnection = page.getByRole('heading', { name: 'Dashboard' });
        this.invalidCredentialsErrorPopup = page.getByText('Invalid credentials'); // Erreur de connexion invalide
        this.LoginText = page.getByRole('heading', { name: 'Login' }); // Login pour se connecter
    }
    // Méthode pour naviguer vers une URL spécifique
    /**@param url  */
    async UrlOrangeHrm(url: string) {
        await this.page.goto(url);
    }
    // Méthode pour se connecter avec un nom d'utilisateur et un mot de passe
    /**
     * //@param MdpValeur
     * @param UserNameValeur 
     */  
    async Connexion(UserNameValeur: string, MdpValeur: string) {
        await this.UserNameSaisi.waitFor({ state: 'visible' })
        await this.UserNameSaisi.fill(UserNameValeur);   // Remplir le champ "Username"
        await this.PassWordSaisi.fill(MdpValeur);        // Remplir le champ "Password"
        await this.BoutonConnecte.click();               // Cliquer sur "Login"
    }

    async ConfirmaConnection(){
     this.ConfirmationConnection;
        //await expect(this.ConfirmationConnection).toHaveText("Dashboard");
    }

async invalidConnection(){
    this.invalidCredentialsErrorPopup;
    this.LoginText;
       //await expect(this.ConfirmationConnection).toHaveText("Dashboard");
   }
}

