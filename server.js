var express = require('express')
var app = express()

// permite requisição de fora
var cors = require('cors')
app.use(cors())

// usa dados do form como JSON
var bodyParser = require('body-parser')
var aux = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());
app.use(aux);

//rotas
var usuario = require('./routes/usuario')
var robo = require('./routes/robo')
var labirinto = require('./routes/labirinto')

app.use('/usuario', usuario)
app.use('/robo', robo)
app.use('/labirinto', labirinto)

// banco de dados MongoDB
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/academico',
            {
            promiseLibrary: require('bluebird')            
            }
        )
        .then(() => console.log('Conectou com sucesso'))
        .catch((err) => console.error(error));

app.listen(3000)
console.log("Rodando servidor Express")