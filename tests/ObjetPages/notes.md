# Notes sur le fichier `ConnectionObjet.spec.ts`

## Fonctionnalité principale
Ce fichier contient un test Playwright qui :
1. Récupère l'URL de base et le mot de passe chiffré depuis les variables d'environnement.
2. Navigue vers la page de connexion.
3. Effectue une connexion avec un nom d'utilisateur et un mot de passe déchiffré.
4. Vérifie que le texte "Dashboard" est présent après la connexion.

---

## Étapes détaillées

### 1. Récupération des variables d'environnement
```typescript
const baseUrl = process.env.BASE_URL as string;
const mdp = process.env.PASSWORD as string;


# Notes sur le fichier `LesVGlogal.spec.ts`

## Fonctionnalité principale
Ce fichier contient un test Playwright qui :
1. Récupère l'URL de base et le mot de passe chiffré depuis les variables d'environnement.
2. Navigue vers la page de connexion.
3. Effectue une connexion avec un nom d'utilisateur et un mot de passe déchiffré.
4. Vérifie que le texte "Dashboard" est présent après la connexion.
5. Attente que l'URL finale corresponde à celle du tableau de bord.
6. Sauvegarde l'état de la session (cookies et localStorage) dans un fichier JSON.

---

## Étapes détaillées

### 1. Récupération des variables d'environnement
```typescript
const baseUrl = process.env.BASE_URL as string;
const mdp = process.env.PASSWORD as string;