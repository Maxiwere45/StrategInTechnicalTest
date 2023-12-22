const User = require('../models/User');

// Obtenir la liste des utilisateurs déjà enregistrés
exports.getUsersList = (req,res, next) => {
    User.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }))
}