const cors = require('cors');
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const controller = require('../controllers/Controller');

const router = express.Router();
var jsonParser = bodyParser.json()
 
// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://anexosjus01:201379@mongodb.anexosjus.kinghost.net:27017/anexosjus01?authSource=anexosjus01');
//mongoose.connect('mongodb://localhost:27017/simulaBancoOnline');
// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'anexosjus01');
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

router.use((req, res, next) => {
    req.headers['content-type'] = req.headers['content-type'] || 'application/json';
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    
    router.use(cors());
    next();
});

router.use(express.json({limit: '5188491'}));
router.use(express.urlencoded({limit: '5188491', extended: true}));

router.get('/',function (req, res, next) {
    res.status(200).send({
        title: "Node Express APIT",
        version: "0.0.1"
    });
});
controller
router.post('/registrarInformacoesPessoais', jsonParser, controller.post);

router.get('/registrarInformacoesPessoais', jsonParser, controller.get);
module.exports = router;