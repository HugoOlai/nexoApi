const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.get('/teste', function (req, res, next) {
    res.status(200).send({
        title: "teste",
        version: "0.0.2"
    });
});

module.exports = router;