# StrategInTechnicalTest

---

Test Technique StrategIn

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

## TEST AVEC POSTMAN

- Pour tester les routes, vous pouvez utiliser **Postman**.

### `GET /login`

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

- Pour s'inscrire, il faut envoyer une requête POST à l'adresse http://localhost:3000/auth/register avec un body de type JSON contenant un mail, un mot de passe et un nom.

> Exemple :

```json
{
"email": "bob@gmail.com",
"password": "bob"
}
```

### `GET /users`

- Pour récupérer la liste des utilisateurs, il faut envoyer une requête GET à l'adresse http://localhost:3000/users
