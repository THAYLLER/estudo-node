var mongoose = require('mongoose')
var roboSchema = new mongoose.Schema(
    {
        tipo: String,
        url_imagem: String, 
        status: String,
        data: String
    }
);

module.exports = mongoose.model('Robo', roboSchema);