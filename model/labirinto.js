var mongoose = require('mongoose')
var labirintoSchema = new mongoose.Schema(
    {
        tipo: String,
        url_imagem: String, 
        status: String,
        data: String
    }
);

module.exports = mongoose.model('Labirinto', labirintoSchema);