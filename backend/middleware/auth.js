const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Récupération du token dans le header Authorization de la requête entrante. La chaîne contenant le mot-clé Bearer et le token est séparée par un espace. On utilise donc la fonction split pour récupérer tout après l'espace dans un tableau, et on récupère le deuxième élément du tableau (le token)
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // Décodage du token grâce à la fonction verify, si celui-ci n'est pas valide, une erreur sera générée
        const userId = decodedToken.userId; // Extraction de l'ID utilisateur de notre token
        req.auth = { userId: userId }; // Ajout d'un objet à la requête pour y ajouter l'ID du token
        next(); // Appel du prochain middleware
    } catch { // S'il y a une erreur, on renvoie une erreur 401
        res.status(401).json({
            error: new Error('Requête non authentifiée !')
        });
    }
}