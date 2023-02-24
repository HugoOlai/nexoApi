
const mongoose = require("mongoose");

const PISchema = require("../schema/Schema") 

const PI = mongoose.model('Usuario', PISchema);

async function salvarUsuario(req){
    console.log('entrei aqui', req.body)
    await PI.create(req.body);
    var Usuario = await PI.find();
    return Usuario;
}

async function pegarUsuario(req){
    //console.log(req.body)
    var Usuario = await PI.findById(req.body.id);
    //console.log(Usuario)
    return Usuario;
}

async function atualizarUsuario(req){
  //console.log(req.body)
  var Usuario = await PI.findOneAndUpdate({ email: req.body.email }, req.body).then(function(err, result){
        console.log(result); // Success
        console.log(err); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
  //console.log(Usuario)
  return Usuario;
}

async function deletarUsuario(req){
  console.log(req.body)
  var Usuario = await PI.deleteOne({ email: req.body.email }).then(function(err, result){
        console.log(result); // Success
        console.log(err); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
  //console.log(Usuario)
  return Usuario;
}

exports.pegarUsuario = pegarUsuario;
exports.salvarUsuario = salvarUsuario;
exports.deletarUsuario = deletarUsuario;
exports.atualizarUsuario = atualizarUsuario;