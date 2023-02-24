
const mongoose = require("mongoose");

const PISchema = require("../schema/Schema") 

const PI = mongoose.model('Usuario', PISchema);

async function salvarUsuario(req){
    console.log('entrei aqui', req.body)
    var result;
    var validaUsuario = null;
    await PI.exists({ email: req.body.email }).exec()
    .then(function(result, err){
        validaUsuario = result;
        console.log("resultado: ",result); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    console.log("validaUsuario",validaUsuario)
    if(validaUsuario == null){
      PI.create(req.body);
      result = {mensagem: "Registrado com sucesso"}
    } else {
      result = {mensagem: "Usuario ja foi registrado"}
    }
    
    return result;
}

async function pegarUsuario(req){
    //console.log(req.body)
    var Usuario = await PI.findById(req.body.id);
    //console.log(Usuario)
    return Usuario;
}

async function pegarTodos(){
  console.log("estou aqui")
  var Usuarios = await PI.find({});
  console.log(Usuarios)
  return Usuarios;
}

async function atualizarUsuario(req){
  //console.log(req.body)
  var Usuario = await PI.findOneAndUpdate({ email: req.body.email }, req.body)
  .then(function(err, result){
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
exports.pegarTodos = pegarTodos;