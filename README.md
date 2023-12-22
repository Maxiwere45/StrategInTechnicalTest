# StrategInTechnicalTest

*Test Technique [StrategIn](https://strateg.in/)*

## Sommaire

- [Description](#description)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation des dépendances](#installation-des-dépendances-du-projet)
- [Lancement du projet](#lancement-du-serveur-node)
- [Client](#client)
- [TEST AVEC POSTMAN](#tests-avec-postman)
  - [`POST /login`](#post-login)
  - [`POST /register`](#post-register)
  - [`GET /users`](#get-users)
- [AUTEUR](#auteur)

## Description

- Ce projet est un test technique pour l'entreprise [StrategIn](https://strateg.in/) dans le cadre d'un recrutement pour un poste de développeur web back-end
- Il s'agit d'un serveur Node.js avec une API REST permettant de se connecter et de s'inscrire.
- Le projet contient également un client HTML, CSS et JS permettant de se connecter et de s'inscrire.

## Technologies utilisées

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [JSON Web Token](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [Postman](https://www.postman.com/)
- [Webstorm](https://www.jetbrains.com/fr-fr/webstorm/)
- [MongoDB](https://www.mongodb.com/fr)

## Prérequis

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

> Vérifier que Node.js et npm sont bien installés en tapant les commandes suivantes dans un terminal :

```bash
node -v
```
    
```bash
npm -v
```

## Installation des dépendances du projet

```bash
npm install
```

## Lancement du serveur node

```bash
npm start
```

- Le serveur est lancé sur le port 3000 : http://localhost:3000/

## Client

- Pour accéder au client, il faut ouvrir le fichier `login.html` dans le dossier `/frontend` contenant le code HTML, CSS et JS du client.
- Vous trouverez la liste des utilisateurs dans le fichier `users.yml` dans la racine du projet.
- Veillez à bien exécuter le client dans un serveur local. (Exemple : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour Visual Studio Code)

## TESTS AVEC POSTMAN

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
