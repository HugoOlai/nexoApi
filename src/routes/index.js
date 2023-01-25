const bodyParser = require('body-parser')
const express = require('express');
const router = express.Router();
const cors = require('cors');

let corsOptions = {
    origin: [ 'http://localhost:4200' || 'https://nexo-algustos-e-lins.herokuapp.com', 'http://localhost:5000' || 'https://api-nexo.herokuapp.com' ]
};

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
router.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
    router.use(cors());
    next();
});

router.get('/', cors(corsOptions),function (req, res, next) {
    res.status(200).send({
        title: "Node Express APIT",
        version: "0.0.1"
    });
});

router.post('/registrarInformacoesPessoais', jsonParser,(req, res) => {
    console.log(req.body)
    return res.status(200).send({
        title: "Node Express APIT",
        version: "0.0.1"
    });;
});

router.get('/registrarInformacoesPessoais', cors(corsOptions),function (req, res, next) {
    
    console.log('testeee')

    return res.json('testeee');
});
module.exports = router;