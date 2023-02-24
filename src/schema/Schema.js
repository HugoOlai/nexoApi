const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const PISchema = new Schema({
//     nome: {
//         type: String,
//         default: ''
//     },
//     email: {
//         type: String,
//         default: ''
//     },   
//   });

const PISchema = new Schema({
    primeiroNome: {
    type: String,
    default: ''
    },
    ultimoNome: {
    type: String
    },
    email: {
    type: String,
    default: ''
    },
    endereco: {
    type: String,
    default: ''
    },
    estado: {
    type: String,
    default: ''
    },
    cep: {
    type: String,
    default: ''
    },
    dataOcorrido: {
    type: Date,
    default: Date.now()
    },
    numeroVoo: {
    type: String,
    default: ''
    },
    dataVoo: {
    type: Date,
    default: Date.now()
    },
    valorPago: {
    type: String,
    default: ''
    },
    formaPagamento: {
    type: String,
    default: ''
    },
    informeTrecho: {
    type: String,
    default: ''
    },
    Descricao: {
    type: String,
    default: ''
    },
    CheckDespesa: {
    type: Boolean,
    default: false
    },
    listaDespesas: [
        {
            Nome: String, Valor: String, arquivo: {Nome: String, doc: String }
        }
    ],
    CheckAcompanhante:{
        type: Boolean,
        default: false 
    },
    listaAcompanhante:[
        {
            Nome: String, sobrenomeAcompanhante: String, arquivo: {Nome: String, doc: String }            
        }
    ],
    Listafile:[
            {
                Nome: String, data: String, tamanho: String, arquivo: {Nome: String, doc: String }  
            }
        ]     
  });

  module.exports = PISchema