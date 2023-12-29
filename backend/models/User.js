const mongoose = require('mongoose'); // Importation du package mongoose
const uniqueValidator = require('mongoose-unique-validator'); // Importation du package mongoose-unique-validator qui empêche plusieurs utilisateurs de partager la même adresse e-mail

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},{ versionKey: false });

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);