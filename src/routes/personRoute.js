const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "teste",
        version: "0.0.1"
    });
});
module.exports = router;