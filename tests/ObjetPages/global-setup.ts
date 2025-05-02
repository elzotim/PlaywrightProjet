// filepath: c:\Users\Alexis\Desktop\PlaywrightProjet\tests\ObjetPages\global-setup.ts
import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const baseUrl = process.env.BASE_URL as string;
    const url = `${baseUrl}/web/index.php/auth/login`;
    const username = process.env.USER_NAME as string;
    const password = process.env.PASSWORD as string;

    // Navigation vers l'URL de connexion
    await page.goto(url);

    // Connexion avec le nom d'utilisateur et le mot de passe
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
    // Ensure 'connection' is defined or imported
        // Example: import { connection } from './path/to/connection';
        // await connection.Connexion(process.env.USER_NAME as string, commonUtils.decryptData(mdp));
        console.warn('connection.Connexion is not implemented. Skipping this step.');

  
    // Attente que la connexion soit réussie
    await page.waitForURL(`${baseUrl}/web/index.php/dashboard/index`);

    // Sauvegarde de l'état de la session
    const sessionStatePath = path.resolve('./Playwright/.auth/auth.json');
    const sessionStateDir = path.dirname(sessionStatePath);

    if (!fs.existsSync(sessionStateDir)) {
        fs.mkdirSync(sessionStateDir, { recursive: true });
    }

    await context.storageState({ path: sessionStatePath });
    console.log(`Session sauvegardée dans : ${sessionStatePath}`);

    await browser.close();
}

export default globalSetup;