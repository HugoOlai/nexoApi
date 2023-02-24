const business = require("../business/Business");

exports.post = (req, res, next) => {
    console.log('estou na rota')
    console.log(req.body)
    var teste = business.salvarUsuario(req);
    res.status(200).send(teste);
};
exports.get = (req, res, next) => {
    let id = req.params.id;
    var teste = business.pegarUsuario(req);
    res.status(200).send(teste);
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};