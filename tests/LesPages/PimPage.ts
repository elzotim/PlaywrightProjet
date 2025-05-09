import { Locator, Page ,expect} from "@playwright/test";
import { faker } from '@faker-js/faker';
// Classe représentant la page de connexion
export class Pim {
    readonly page: Page;
    readonly PimButon: Locator;      // Champ pour le nom d'utilisateur
    readonly Adbutton : Locator;      // Champ pour le mot de passe
    readonly Firstname: Locator;     // Bouton de connexion
    readonly lastname : Locator //confirmation de la connection 
    readonly Midlename: Locator; // Erreur de connexion invalide
    readonly employeId  : Locator; // Login pour se connecter
    readonly uploadfichier: Locator; // Login image de profil 
    constructor(page: Page) {
        this.page = page;
        // Sélection des éléments par leur rôle et nom accessible
        this.PimButon = page.getByText('PIM'); // Sélectionne le bouton PIM
        this.Adbutton = page.getByRole('button', { name: 'Add' }); // Sélectionne le bouton "Add"
        this.Firstname = page.getByRole('textbox', { name: 'First Name' }); // Sélectionne le champ "First Name"
        this.lastname = page.getByRole('textbox', { name: 'Last Name' }); // Sélectionne le champ "Last Name"
        this.Midlename = page.getByRole('textbox', { name: 'Middle Name' }); // Sélectionne le champ "Middle Name"
        this.employeId = page.getByRole('textbox').nth(4) // Sélectionne le champ "Employee Id"
        this.uploadfichier = page.locator('input.oxd-file-input'); // Sélectionne le bouton "Choose File"
    }
   
    async Pimpage() {
        console.log(this.page.url()); // Afficher l'URL actuelle de la page
        await this.PimButon.waitFor({ state: 'visible' }); // Attendre que le lien soit visible
        await this.PimButon.click(); // Cliquer sur le lien "PIM"
       
    }
    async Addclick() {
        console.log(this.page.url()); // Afficher l'URL actuelle de la page
        await this.Adbutton.waitFor({ state: 'visible' }); // Attendre que le lien soit visible
        await this.Adbutton.click(); // Cliquer sur le lien "Add"
       
    }
    async allName() {
        console.log(this.page.url()); // Afficher l'URL actuelle de la page
        await this.Firstname.waitFor({ state: 'visible' }); // Attendre que le lien soit visible
        await this.Firstname.fill("John"); // Remplir le champ "First Name"
        await this.lastname.fill("Doe"); // Remplir le champ "Last Name"
        await this.Midlename.fill("Smith"); // Remplir le champ "Middle Name"
        const testData = faker.string.alphanumeric(4);
        await this.employeId.fill(testData); // Remplir le champ "Employee ID"
    }
 async dprofilpicture() {
    await this.uploadfichier.setInputFiles("Images/image.png"); // Sélectionner le fichier d'image
}
}

