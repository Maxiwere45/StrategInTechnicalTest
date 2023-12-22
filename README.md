# StrategInTechnicalTest

*Test Technique StrategIn*

## Sommaire
- [Prérequis](#prérequis)
- [Installation des dépendances](#installation-des-dépendances)
- [Lancement du projet](#lancement-du-projet)
- [Client](#client)
- [TEST AVEC POSTMAN](#test-avec-postman)
  - [`POST /login`](#post-login)
  - [`POST /register`](#post-register)
  - [`GET /users`](#get-users)
- [AUTEUR](#auteur)

## Prérequis

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Installation des dépendances

```bash
npm install
```

## Lancement du projet

```bash
npm start
```

- Le serveur est lancé sur le port 3000 : http://localhost:3000/

## Client

- Pour accéder au client, il faut ouvrir le fichier `login.html` dans le dossier `/frontend` contenant le code HTML, CSS et JS du client.
- Vous trouverez la liste des utilisateurs dans le fichier `users.yml` dans la racine du projet.
- Veillez à bien exécuter le client dans un serveur local. (Exemple : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour Visual Studio Code)

## TEST AVEC POSTMAN

- Pour tester les routes, vous pouvez utiliser **Postman**.
- Vous trouverez un fichier `StrategInTechnicalTest.postman_collection.json` dans la racine du projet (à importer sur Postman) contenant les requêtes pour tester les routes.

### `POST /login`

- Pour se connecter, il faut envoyer une requête POST à l'adresse http://localhost:3000/auth/login avec un body de type JSON contenant un mail et un mot de passe.

> Exemple :

```json
{
"email": "guest1@gmail.com",
"password": "guest1"
}
```

- Pour récupérer la liste des utilisateurs, il faut envoyer une requête GET à l'adresse http://localhost:3000/users

### `POST /register`

- Pour s'inscrire, il faut envoyer une requête POST à l'adresse http://localhost:3000/auth/register avec un body de type JSON contenant un mail, un mot de passe.

> Exemple :

```json
{
"email": "bob@gmail.com",
"password": "bob"
}
```

### `GET /users`

- Pour récupérer la liste des utilisateurs, il faut envoyer une requête GET à l'adresse http://localhost:3000/users avec un **header contenant un token valide.**


## AUTEUR

- [**ANRIFOU AMDJAD**](https://github.com/Maxiwere45)
