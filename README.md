# Projet DevOps Labs

## Lab 1 - Démarrage avec Node.js

### Objectifs
1. Créez un projet Node.js.
2. Initialisez un package Node.js avec npm.
3. Ajoutez Express pour créer une application web.
4. Rédigez une description dans le fichier `README.md`.

### Pour commencer le Lab 1 :
git clone
cd projet-devops
npm install
npm start

## Lab 2 - Maîtrisez Git avec GitHub Desktop et CLI

### Objectifs
Effectuez le tutoriel GitHub Desktop.
Créez un dépôt sur GitHub et clonez-le sur votre ordinateur.
Créez une branche, modifiez un fichier et poussez les modifications.
Gérez les conflits lors de la fusion.
Refaites le lab en utilisant l'interface de ligne de commande (CLI) Git.

### Pour commencer le Lab 2 :
bash
Copy code
git clone https://github.com/votre-utilisateur/nom-du-lab.git
cd nom-du-lab

## Lab 3 - README

### Objectifs

1. Utiliser une application API utilisateur préparée et exécuter des tests.
2. En utilisant le développement piloté par les tests (TDD), créer une fonctionnalité GET utilisateur.

### Contenu du projet

- `lab/`: Dossier principal du projet.

  - `src/`: Contient le code source de l'application.

    - `controllers/`: Dossier des contrôleurs.

      - `user.js`: Contrôleur pour la gestion des utilisateurs. (on a mis qu'un seul utilisateur, mais on peut en mettre plusieurs) Contient une méthode pour récupérer un utilisateur par nom d'utilisateur.

    - `routes/`: Dossier des routes.

      - `user.js`: Fichier définissant la route GET pour récupérer les utilisateurs.

    - `index.js`: Fichier principal de l'application. Initialise le serveur et les routes.

  - `test/`: Contient les tests de l'application.

    - `user.controller.js`: Tests unitaires pour le contrôleur d'utilisateurs.
    - `user.router.js`: Tests API pour la route GET d'utilisateur.

  - `node_modules/`: Dossier généré par npm pour stocker les dépendances du projet. /bien mis dans le .gitignore

  - `package.json`: Fichier de configuration npm. Liste les dépendances et les scripts.


### Exécution des tests

ne pas oublier d'installer mocha : npm install --save-dev mocha
```bash
(bien verifier que mo)
cd lab
npm test

### Résultats des Tests

#### Tests du Contrôleur Utilisateur : Assurent que la logique du contrôleur utilisateur fonctionne comme prévu.

- doit obtenir un utilisateur par nom d'utilisateur : Vérifie si l'utilisateur est récupéré avec succès.
- e doit pas obtenir un utilisateur s'il n'existe pas : Vérifie le comportement correct lorsque l'utilisateur n'est pas trouvé.

#### Tests API Utilisateur : Valident la fonctionnalité de la route GET utilisateur.

- doit obtenir un utilisateur avec succès : Teste la récupération réussie d'un utilisateur.
doit renvoyer 404 lorsque l'utilisateur n'existe pas : Assure une réponse 404 pour un utilisateur inexistant.
