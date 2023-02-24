
const mongoose = require("mongoose");
const PISchema = require("../schema/Schema");
const PI = mongoose.model('Usuario', PISchema);

async function salvarUsuario(req){
    var result;
    var validaUsuario = null;
    await PI.exists({ email: req.body.email }).exec()
    .then(function(result, err){
        validaUsuario = result;
    }).catch(function(error){
        console.log(error); // Failure
    });

    if(validaUsuario == null){
      PI.create(req.body);
      result = {mensagem: "Registrado com sucesso"}
    } else {
      result = {mensagem: "Usuario ja foi registrado"}
    }
    
    return result;
}

async function pegarUsuario(req){
    var Usuario = await PI.findById(req.body.id);
    return Usuario;
}

async function pegarTodos(){
  var Usuarios = await PI.find({});
  return Usuarios;
}

async function atualizarUsuario(req){
  await PI.findOneAndUpdate({ email: req.body.email }, req.body)
  .then(function(err, result){
        console.log(result); // Success
        console.log(err); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
  return {mensagem: "Atualizado com sucesso"};
}

async function deletarUsuario(req){
  await PI.deleteOne({ email: req.body.email }).then(function(err, result){
        console.log(result); // Success
        console.log(err); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
  return {mensagem: "Deletado com sucesso"};
}

exports.pegarUsuario = pegarUsuario;
exports.salvarUsuario = salvarUsuario;
exports.deletarUsuario = deletarUsuario;
exports.atualizarUsuario = atualizarUsuario;
exports.pegarTodos = pegarTodos;