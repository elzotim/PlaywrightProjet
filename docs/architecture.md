# Architecture et inventaire du projet

Ce document décrit l’organisation constatée du dépôt. Les dossiers de dépendances (`node_modules/`) et de contrôle de versions (`.git/`) ne sont pas détaillés : ils sont générés ou gérés par leurs outils.

## Vue d’ensemble

La configuration de [Playwright](../playwright.config.ts) déclare actuellement deux projets :

- **`chromium`** : tests dans `tests/ObjetPages`.
- **`API_Test`** : tests dans `tests/APi_Test`.

Les autres fichiers de `tests/` (notamment Cucumber, les exemples et les squelettes) ne sont pas automatiquement lancés par ces deux projets.

Un parcours courant dans `ObjetPages` est organisé ainsi :

1. `playwright.config.ts` charge l’environnement et sélectionne les projets.
2. `MesFixtures/ConnectionFixzture.ts` fournit les objets de pages aux tests.
3. `MesFixtures/CrypteDecripte.ts` ajoute l’utilitaire de chiffrement/déchiffrement.
4. Les classes de `tests/LesPages/` encapsulent les locators et actions d’interface.
5. Les fichiers `tests/ObjetPages/*.spec.ts` décrivent les scénarios et assertions.

Cucumber constitue une voie distincte : les fichiers `.feature` décrivent les scénarios en Gherkin et les fichiers d’étapes TypeScript les implémentent. Sa configuration se trouve dans `cucumber.json`.

## Fichiers à la racine

| Fichier | Rôle |
|---|---|
| `README.md` | Présentation courte et démarrage rapide. |
| `package.json` | Dépendances npm et commandes (`scripts`). |
| `package-lock.json` | Verrouillage des versions exactes des dépendances npm. |
| `playwright.config.ts` | Environnements, répertoires de tests, projets Chromium/API, rapports, captures, vidéos et traces. |
| `cucumber.json` | Fichiers Cucumber à charger, chemins `.feature`, formats de sortie et exécution séquentielle. |
| `tsconfig.json` | Options TypeScript strictes et périmètre de compilation (`tests/**/*.ts` et `utils/**/*.ts`). |
| `.gitignore` | Règles d’exclusion Git, notamment `node_modules/`, résultats et rapport Playwright. |

## Dossiers et fichiers

### `Archives/`

Dossier vide au moment de la rédaction, prévu pour d’éventuels éléments archivés.

### `Data/`

- `data.json` : données de test de connexion invalide : identifiants incorrects et textes attendus pour le message d’erreur et l’écran de connexion. Ce n’est pas le fichier des identifiants d’environnement.

### `env-files/`

Fichiers de variables par cible :

- `.env.dev` : paramètres de développement.
- `.env.pp` : paramètres de l’environnement `pp`.
- `.env.rec` : paramètres de l’environnement `rec`.

`ENV_NAME` sélectionne le fichier chargé par `playwright.config.ts` ; en son absence, `.env.dev` est utilisé. Les valeurs sont volontairement omises ici. Ne pas committer de véritables identifiants, mots de passe ou clés.

### `Images/`

- `Capture.jpg` : image utilisée par le test d’envoi de photo dans Buzz.
- `image.png` : image utilisée pour l’essai d’ajout de photo de profil dans PIM.

### `MesFixtures/`

Fixtures Playwright personnalisées qui rendent les classes et utilitaires accessibles dans les tests.

- `ConnectionFixzture.ts` : étend `test` et met à disposition `Connection`, `TableauBordPage`, `Recrutement`, `Deconnection`, `BuzzPage`, `UserDuSysteme` et `Pim`.
- `CrypteDecripte.ts` : étend la fixture de connexion et ajoute une instance de `CommonUtils`.

### `PlanTest/`

- `ConnectionObjet.testplan.md` : plan manuel couvrant les préconditions, étapes et résultats attendus d’une connexion OrangeHRM et de la vérification du tableau de bord.

### `Playwright/`

- `.auth/` : emplacement prévu pour l’état d’authentification Playwright (cookies et stockage local), par exemple `auth.json`. Ce dossier est vide dans l’état observé.

### `playwright-report/`

Rapport Playwright généré et ressources utilisées par son interface. Ces fichiers ne sont pas du code source à modifier manuellement et les noms avec suffixes peuvent changer lors d’une nouvelle génération.

- `index.html` : rapport principal.
- `data/fcde17458b6ccabf46155a9e2dce635f914b65f8.zip` : données associées au rapport.
- `trace/index.html`, `trace/snapshot.html` : interface de trace et aperçu HTML.
- `trace/playwright-logo.svg` : logo de l’interface.
- `trace/sw.bundle.js` : service worker.
- `trace/index.Bx16ehp1.js`, `trace/index.I8N9v4jT.css` : JavaScript et styles principaux.
- `trace/uiMode.html`, `trace/uiMode.DRQ310U5.js`, `trace/uiMode.Btcz36p_.css` : page, code et styles du mode UI.
- `trace/codeMirrorModule.C3UTv-Ge.css` et `trace/assets/codeMirrorModule-eyVcHN77.js` : styles et code de l’éditeur intégré.
- `trace/defaultSettingsView.TQ8_7ybu.css` et `trace/assets/defaultSettingsView-w0zYjHsW.js` : styles et code des paramètres de trace.
- `trace/xtermModule.DYP7pi_n.css` : styles du module terminal.
- `trace/codicon.DCmgc-ay.ttf` : police d’icônes.

### `reports/`

- `cucumber-report.html` : rapport HTML généré par Cucumber.

### `supportCours/`

- `notes.md` : notes sur l’enregistrement et le rechargement du stockage d’authentification (`auth.json`) avec Playwright Codegen.

### `tests/`

#### Fichiers à la racine de `tests/`

- `example.spec.ts` : exemple d’envoi d’image dans Buzz ; il utilise encore un chemin d’image fictif à remplacer avant utilisation.
- `seed.spec.ts` : squelette de test « seed », sans préparation de données concrète.

#### `tests/AI/`

- `zerotype.spec.ts` : essai d’automatisation assistée par `@zerostep/playwright` sur un parcours de réservation Calendly.

#### `tests/APi_Test/`

- `stful-booker_module_api.spec.ts` : essais de requêtes GET sur Restful Booker et assertions sur les réponses de réservation. C’est le répertoire du projet `API_Test`.

#### `tests/Features/`

Scénarios Gherkin et étapes Cucumber.

- `LoginCucumber/Connectiontest.feature` : scénarios de connexion avec identifiants invalides et contrôles des messages d’erreur.
- `LoginCucumber/Connectiontest.steps.ts` : définitions d’étapes des scénarios invalides.
- `LoginCucumber/login.feature` : scénario de connexion réussie et d’accès au tableau de bord.
- `LoginCucumber/login.steps.ts` : définitions d’étapes du scénario de connexion réussie.
- `support/hook.ts` : hooks `Before` et `After` pour ouvrir/fermer le navigateur via le contexte personnalisé.
- `support/world.ts` : `CustomWorld` Cucumber et méthodes d’ouverture/fermeture du navigateur.

#### `tests/LesPages/`

Classes de pages et locators (modèle Page Object).

- `ConnnexionPage.ts` : navigation vers la connexion, saisie des identifiants et vérification du tableau de bord ou d’une erreur.
- `DeconnectionPage.ts` : ouverture du menu utilisateur, déconnexion et vérification de la disparition des éléments du menu.
- `TableauBordPage.ts` : locator et vérification du titre « Dashboard ».
- `BuzzPage.ts` : accès à Buzz et envoi d’une image avec une description.
- `PimPage.ts` : navigation PIM, formulaire d’ajout d’employé, génération d’un identifiant et ajout d’une photo.
- `Recrutement.ts` : locators et actions de filtrage et de recherche de candidats.
- `UserDuSystem.ts` : interactions avec les cases à cocher de la page des utilisateurs système.
- `cucumber_login.ts` : autre ensemble d’étapes Cucumber de connexion, distinct de `Features`, avec sa propre gestion du navigateur.

#### `tests/ObjetPages/`

Tests Playwright basés principalement sur les fixtures et objets de pages. C’est le répertoire de tests du projet Chromium configuré.

- `BuzzPage.spec.ts` : connexion puis envoi d’image dans Buzz.
- `CasTestModulesConnection.spec.ts` : tests de connexion invalide (mot de passe, nom d’utilisateur ou les deux) avec les données de `Data/data.json`.
- `ConnectionObjet.spec.ts` : connexion et validation du tableau de bord.
- `LesVGlobal.spec.ts` : vérification globale du tableau de bord après connexion ; contient aussi des exemples/commentaires d’autres parcours.
- `PimObjet.spec.ts` : navigation vers PIM, formulaire d’ajout d’employé et chargement d’une image.
- `RecrutementObjet.spec.ts` : recherche de candidats avec filtres et données générées par Faker.
- `UserSystemeObjet.spec.ts` : navigation vers les utilisateurs système et essai de sélection/suppression d’utilisateurs.
- `global-setup.ts` : script prévu pour se connecter et enregistrer l’état de session dans `Playwright/.auth/auth.json`. Il n’est pas activé comme `globalSetup` dans la configuration Playwright actuelle.
- `seed.spec.ts` : squelette de test de préparation, sans action métier concrète.
- `reconfig.ts` : fichier TypeScript de reconfiguration/essai local ; consulter son contenu avant utilisation.
- `notes.md` : notes de travail sur les tests de connexion et le stockage de session.

### `utils/`

- `common-utils.ts` : classe `CommonUtils` pour chiffrer et déchiffrer des chaînes avec AES via `crypto-js`. Elle requiert `SECRET_KEY`, sauf dans le cas de test prévu par le code.
- `decriptEtCriptMdp.spec.ts` : essai manuel de chiffrement/déchiffrement qui appelle `page.pause()` et journalise des informations ; ce n’est pas un test de suite autonome prêt pour la CI.

### `.github/`

- `workflows/playwright.yml` : workflow GitHub Actions sur `push` et `pull_request` vers `main`/`master`. Il installe Node, les dépendances et les navigateurs, lance Playwright puis publie le rapport comme artefact.
- `chatmodes/ 🎭 planner.chatmode.md` : mode d’assistance à la préparation de plans de test.
- `chatmodes/🎭 generator.chatmode.md` : mode d’assistance à la création de tests Playwright.
- `chatmodes/🎭 healer.chatmode.md` : mode d’assistance au diagnostic de tests Playwright.

### `.vscode/`

- `settings.json` : réglage local de Live Server (port `5501`).
- `mcp.json` : configuration locale du serveur MCP `playwright-test`, lancé avec `npx`.

## Commandes et configuration

### Installation et lancement

```powershell
npm ci
npx playwright install chromium
npm run ExecRec
```

Exemples de commandes définies dans `package.json` :

| Commande | Fonction et remarque |
|---|---|
| `npm run ExecRec`, `npm run ExecDev`, `npm run Execpp` | Lancement des projets Playwright configurés avec l’environnement correspondant. |
| `npm run ExecRecchrome`, `npm run ExecDevchrome`, `npm run Execppchrome` | Exécution visible avec Chromium (`--headed`). |
| `npm run ExecRecui`, `npm run ExecDevui`, `npm run Execppui` | Ouverture de l’interface Playwright. |
| `npm run ExecRecchromeui`, `npm run ExecDevchromeui`, `npm run Execppchromeui` | Interface Playwright avec Chromium ; certains scripts ajoutent `--debug`. |
| `npm run Test_API_rec` | Projet `API_TEST` avec l’environnement `rec`. |
| `npm run ExecRecFirefox`, `npm run ExecDevFirefox`, `npm run ExecppFirefox` | Scripts présents, mais projet Firefox commenté dans `playwright.config.ts`. |
| `npm run ExecRecFirefoxui`, `npm run ExecDevFirefoxui`, `npm run ExecppFirefoxui` | Variantes Firefox UI présentes, mais projet Firefox commenté. |
| `npm run auth`, `npm run auth2` | Anciens scripts ciblant `.LesVGlobal.spec.ts` ; vérifier le chemin défini dans `package.json` avant usage. |

La commande `npx playwright test` lance les projets définis dans la configuration. Les scripts Cucumber sont configurés séparément dans `cucumber.json`.

### Variables d’environnement

Les scripts sélectionnent l’environnement au moyen de `ENV_NAME` et les fichiers `env-files/.env.*`. Sans cette variable, la configuration charge `.env.dev`. Selon les scénarios, les variables employées comprennent `BASE_URL`, `API_URL`, `USER_NAME`, `PASSWORD` et `SECRET_KEY`. Le contenu des fichiers n’est pas reproduit ici pour éviter de divulguer des secrets.

### Dépendances principales

- `@playwright/test` : tests navigateur/API et assertions.
- `@cucumber/cucumber` et `ts-node` : scénarios Gherkin/TypeScript.
- `dotenv` et `cross-env` : chargement des environnements et définition portable de `ENV_NAME`.
- `crypto-js` : chiffrement AES utilisé par l’utilitaire.
- `@faker-js/faker` : génération de données de test.
- `@zerostep/playwright` : essai d’automatisation assistée par IA.
- `typescript`, `@types/node` et `@types/crypto-js` : compilation et typage TypeScript.

`node_modules/`, si présent localement, contient les dépendances installées par npm ; son contenu est généré à partir de `package.json` et `package-lock.json`.
