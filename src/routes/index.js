const cors = require('cors');
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const controller = require('../controllers/Controller');

const router = express.Router();
var jsonParser = bodyParser.json()
 
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://anexosjus01:201379@mongodb.anexosjus.kinghost.net:27017/anexosjus01?authSource=anexosjus01');
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'anexosjus01');
});
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

router.use((req, res, next) => {
    req.headers['content-type'] = req.headers['content-type'] || 'application/json';
    res.header("Access-Control-Allow-Origin", "*");
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

router.post('/registrarInformacoesPessoais', jsonParser, controller.post);
router.post('/atualizarInformacoesPessoais', jsonParser, controller.put);
router.post('/deletarInformacoesPessoais', jsonParser, controller.delete);
router.get('/pegarInformacoesPessoais', jsonParser, controller.get);
module.exports = router;