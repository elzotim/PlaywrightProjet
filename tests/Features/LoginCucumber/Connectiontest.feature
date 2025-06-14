Feature: Connexion - Cas de tests d'identifiants invalides

  Scenario: L'utilisateur ne peut pas se connecter avec un mot de passe invalide
    Given l'utilisateur est sur la page de connexion
    When il saisit le nom d'utilisateur valide "Admin"
    And il saisit un mot de passe invalide "wrongpassword"
    And il clique sur le bouton "Login"
    Then un message d'erreur "Invalid credentials" doit s'afficher

  Scenario: L'utilisateur ne peut pas se connecter avec un nom d'utilisateur invalide
    Given l'utilisateur est sur la page de connexion
    When il saisit un nom d'utilisateur invalide "InvalidUser"
    And il saisit le mot de passe valide "Admin123"
    And il clique sur le bouton "Login"
    Then un message d'erreur "Invalid credentials" doit s'afficher

  Scenario: L'utilisateur ne peut pas se connecter avec un nom d'utilisateur et un mot de passe invalides
    Given l'utilisateur est sur la page de connexion
    When il saisit un nom d'utilisateur invalide "InvalidUser"
    And il saisit un mot de passe invalide 
    And il clique sur le bouton "Login"
    Then un message d'erreur "Invalid credentials" doit s'afficher
    And le texte "Login" doit être visible sur la page