# PlaywrightProjet

Projet d’apprentissage et d’automatisation de tests avec **Playwright**, principalement autour d’OrangeHRM. Le dépôt contient des tests navigateur, des essais API et Cucumber, des fixtures et des Page Objects.

## Démarrage rapide

Prérequis : Node.js et npm.

```powershell
npm ci
npx playwright install chromium
npm run ExecRec
```

Les scripts `ExecRec`, `ExecDev` et `Execpp` sélectionnent leur environnement. Les paramètres sont chargés depuis `env-files/.env.<environnement>` ; sans `ENV_NAME`, Playwright utilise `.env.dev`. Renseigner localement les variables requises (`BASE_URL`, `API_URL`, `USER_NAME`, `PASSWORD` et éventuellement `SECRET_KEY`) sans publier de véritables identifiants ou secrets.

Autres commandes pratiques :

- `npm run ExecRecchrome` : exécution visible avec Chromium.
- `npm run ExecRecui` : ouvre l’interface Playwright.
- `npm run Test_API_rec` : lance le projet de tests API.
- `npx playwright test` : lance les projets Playwright configurés.

La configuration active les projets `chromium` (`tests/ObjetPages`) et `API_Test` (`tests/APi_Test`). Les scénarios Cucumber et les autres exemples de `tests/` ne sont pas inclus automatiquement dans ces projets.

## Organisation

- `tests/` : scénarios Playwright, Cucumber et objets de pages.
- `MesFixtures/` : fixtures partagées entre les tests.
- `utils/` : fonctions utilitaires, dont le chiffrement/déchiffrement.
- `Data/`, `Images/` et `env-files/` : données, fichiers d’essai et configuration des environnements.
- `PlanTest/` et `supportCours/` : plan de test et notes de travail.
- `playwright-report/` et `reports/` : rapports générés.
- `.github/` et `.vscode/` : configuration GitHub Actions, modes d’assistance et réglages locaux de VS Code.

Pour le rôle de chaque dossier et fichier, les limites des projets de test, les scripts disponibles et les détails de configuration, voir [la documentation de l’architecture](./docs/architecture.md).

Les rapports et traces sont générés par les outils et peuvent être remplacés à la prochaine exécution. Ne pas les modifier comme du code source.
