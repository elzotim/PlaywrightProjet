# Plan de test – Connexion et Tableau de bord OrangeHRM (`ConnectionObjet.spec.ts`)

## Résumé exécutif

Ce plan de test couvre le scénario de connexion à l’application OrangeHRM via l’URL de connexion définie dans le code (`${baseUrl}/web/index.php/auth/login`). Il vérifie l’accès au tableau de bord après authentification avec des identifiants valides, ainsi que la présence du texte "Dashboard" sur la page d’accueil. Le test prépare l’environnement utilisateur avant chaque scénario.

---

## Scénario 1 : Connexion et accès au tableau de bord

### Titre
Connexion avec identifiants valides et vérification du tableau de bord

### Préconditions
- L’utilisateur dispose d’un identifiant et d’un mot de passe valides (définis dans les variables d’environnement).
- L’application OrangeHRM est accessible à l’URL de base (exemple : `https://opensource-demo.orangehrmlive.com`).
- Le navigateur démarre avec une session vierge.

### Étapes

1. **Préparation de la session**
   1.1. Récupérer l’URL de base depuis les variables d’environnement.
   1.2. Construire l’URL de connexion : `${baseUrl}/web/index.php/auth/login`.
   1.3. Naviguer vers la page de connexion.
   1.4. Récupérer le mot de passe chiffré et le déchiffrer.
   1.5. Saisir le nom d’utilisateur et le mot de passe.
   1.6. Cliquer sur le bouton de connexion.

2. **Vérification de la connexion**
   2.1. Vérifier que le texte "Dashboard" est présent sur la page (élément principal du tableau de bord).
   2.2. Vérifier que le texte "Dashboard" est également présent via la page objet `tableauBordPage`.
   2.3. Afficher le titre et l’URL de la page pour vérification.

### Résultats attendus

- L’utilisateur est redirigé vers la page du tableau de bord après connexion.
- Le texte "Dashboard" est visible sur la page.
- Aucun message d’erreur de connexion n’est affiché.
- Les logs affichent le titre et l’URL de la page du tableau de bord.

### Critères de succès

- Le test passe sans erreur.
- Les assertions sur la présence du texte "Dashboard" sont validées.
- L’URL finale correspond à celle du tableau de bord.

### Critères d’échec

- Le texte "Dashboard" n’est pas trouvé après la connexion.
- L’URL n’est pas celle attendue.
- Une erreur de connexion ou une exception est levée lors du test.

---

## Scénarios complémentaires recommandés

- Connexion avec identifiants invalides (vérification du message d’erreur).
- Déconnexion et retour à la page de login.
- Test de l’expiration de session.
- Test d’accès direct à une page protégée sans authentification.

---

## Format des scénarios

Chaque scénario est indépendant et peut être exécuté dans n’importe quel ordre.  
Le test commence toujours avec un navigateur vierge et une session utilisateur propre.

---

## Résumé

Ce plan de test garantit que la fonctionnalité de connexion et l’accès au tableau de bord sont opérationnels pour un utilisateur valide via l’URL de connexion définie dans le code. Il sert de base pour étendre la couverture de test à d’autres cas d’usage liés à l’authentification.
  ///le commentaire si est juste la pour nous montrer que les choses doivent etre mosifier dans la suite du texte 
        /// on commentera le reste de la phrases dans tous les cas c'est jut du test à suprimmé par la suite 
        ///da&ns ce cas de figure pas de soucis c'est bon  bon 
        /// 
        console.accueil