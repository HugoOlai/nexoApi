const business = require("../business/Business");

exports.post = (req, res, next) => {
    console.log('estou na rota')
    console.log(req.body)
    var result = business.salvarUsuario(req);
    return res.status(200).send(result);
};
exports.get = async (req, res, next) => {
    let id = req.params.id;
    var result = await business.pegarUsuario(req);
    console.log(result)
    return res.status(200).send(result);
};
exports.put = async (req, res, next) => {
    let id = req.params.id;
    var result = await business.atualizarUsuario(req);
    console.log(result)
    return res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    var result = await business.deletarUsuario(req);
    console.log(result)
    return res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};