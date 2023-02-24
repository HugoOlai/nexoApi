
const mongoose = require("mongoose");

const PISchema = require("../schema/Schema") 

const PI = mongoose.model('Usuario', PISchema);

async function salvarUsuario(req){
    console.log('entrei aqui', req.body)
    await PI.create(req.body);
    var Usuario = await PI.find();
    console.log(Usuario)
   
    //return 200;
}

async function pegarUsuario(req){
    var Usuario = await PI.findById("63f65c76002ccc8e7febbbb6");
    console.log(Usuario)
    return null;
}

exports.pegarUsuario = pegarUsuario;
exports.salvarUsuario = salvarUsuario;