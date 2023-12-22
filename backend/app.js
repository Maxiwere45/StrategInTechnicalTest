const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config'); // Import du fichier de configuration

// Import des routes
const userRoutes = require('./routes/userAuth'); // Import de la route dédiée à l'authentification
const usersRoutes = require('./routes/users'); // Import de la route dédiée aux utilisateurs

mongoose.connect('mongodb+srv://guest:'+ config.pass + '@maincluster.dry9s0g.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    //.then(() => console.log('Connexion à MongoDB réussie !')) // Si la connexion réussit, on affiche ce message dans la console
    .catch(() => console.log('Connexion à MongoDB échouée !')); // Si la connexion échoue, on affiche ce message dans la console

// Création de l'application express
const app = express();

// Ajout de headers pour éviter les erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Accès à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Ajout des headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Envoi de requêtes avec les méthodes mentionnées
    next();
});

app.use(bodyParser.json());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;


