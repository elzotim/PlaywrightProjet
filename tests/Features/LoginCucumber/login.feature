Feature: Connexion à l'application OrangeHRM

  Scenario: Connexion réussie avec des identifiants valides
    Given l'utilisateur est sur la page de connexion
    When il saisit le nom d'utilisateur "Admin"
    And il saisit le mot de passe "admin123"
    And il clique sur le bouton "Login"
    Then il doit voir le tableau de bord

  