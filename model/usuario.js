var mongoose = require('mongoose')
var usuarioSchema = new mongoose.Schema(
    {
        nome: String,
        robo: String, 
        endereco: String,
        status: String,
        data: String
    }
);

module.exports = mongoose.model('Usuario', usuarioSchema);

