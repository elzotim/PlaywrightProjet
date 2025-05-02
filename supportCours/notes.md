# Sauvegarde du stockage d'authentification :

# npx playwright codegen --save-storage=auth.json
Cette commande lance Playwright en mode de génération de code et enregistre la session authentifiée dans auth.json. Vous interagirez avec le navigateur (probablement en vous connectant) et Playwright enregistrera l'état de stockage.
Chargement du stockage d'authentification et génération du code :
# npx playwright codegen --load-storage=auth.json https://opensource-demo.orangehrmlive.com/
Cette commande réutilise l'authentification enregistrée ( auth.json) pour démarrer une session déjà connectée et commence à générer du code pour les interactions sur le site Web spécifié : https://opensource-demo.orangehrmlive.com/.