import mongoose from 'mongoose';
const { Schema } = mongoose;

/**
 * @typedef Usuario
 * @property { string } nome.required
 * @property { string } login.required
 * @property { string } senha.required
 * @property { string} email.required
 */

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuario');