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
    
    return res.status(200).send(result);
};

exports.put = async (req, res, next) => {
    let id = req.params.id;
    var result = await business.atualizarUsuario(req);
    return res.status(201).send(result);
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    var result = await business.deletarUsuario(req);
    return res.status(200).send(result);
};