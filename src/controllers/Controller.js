const business = require("../business/Business");

exports.post = async (req, res, next) => {   
    var result = await business.salvarUsuario(req);
    console.log(result)
    return res.status(200).send(result);
};

exports.get = async (req, res, next) => {
    let id = req.params.id;
    var result;
    var pegarTodos = req.body.pegarTodos
    if(!pegarTodos)
        result = await business.pegarUsuario(req);
    
    if(pegarTodos)
        result = await business.pegarTodos();
    
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