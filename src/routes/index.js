const express = require('express');
const router = express.Router();
const cors = require('cors');

let corsOptions = {
    origin: [ 'http://localhost:4200' || 'https://nexo-algustos-e-lins.herokuapp.com', 'http://localhost:5000' || 'https://api-nexo.herokuapp.com' ]
};
router.get('/', cors(corsOptions),function (req, res, next) {
    res.status(200).send({
        title: "Node Express APIT",
        version: "0.0.1"
    });
});
module.exports = router;