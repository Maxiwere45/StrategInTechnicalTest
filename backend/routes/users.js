const express = require('express');
const usersCtrl = require('../controllers/users');
const auth = require('../middleware/auth');
const router = express.Router(); // Création du router avec la méthode Router() d'Express

// GET : Récupération de la liste des utilisateurs enregistrés
router.get('/', auth, usersCtrl.getUsersList);

module.exports = router;