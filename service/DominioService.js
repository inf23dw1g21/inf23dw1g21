'use strict';
var mysql = require("../utils/db.js")

/**
 *
 * returns List
 **/
exports.dominioGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "nome" : "Patatas",
  "codigo_TLD" : ".net",
  "estado" : "Ativo",
  "data_de_inicio" : "2023-01-01",
  "data_de_fim" : "2024-01-01",
  "cliente" : 1
}, {
  "id" : 0,
  "nome" : "Patatas",
  "codigo_TLD" : ".net",
  "estado" : "Ativo",
  "data_de_inicio" : "2023-01-01",
  "data_de_fim" : "2024-01-01",
  "cliente" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Dominio Dominio que precisa ser adicionado , editado ou removido do negocio (optional)
 * no response value expected for this operation
 **/
exports.dominioPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.dominio_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * returns dominio
 **/
exports.dominio_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "nome" : "Patatas",
  "codigo_TLD" : ".net",
  "estado" : "Ativo",
  "data_de_inicio" : "2023-01-01",
  "data_de_fim" : "2024-01-01",
  "cliente" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Dominio Dominio que precisa ser adicionado , editado ou removido do negocio (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.dominio_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.dominio_idclienteGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "nome" : "Patatas",
  "codigo_TLD" : ".net",
  "estado" : "Ativo",
  "data_de_inicio" : "2023-01-01",
  "data_de_fim" : "2024-01-01",
  "cliente" : 1
}, {
  "id" : 0,
  "nome" : "Patatas",
  "codigo_TLD" : ".net",
  "estado" : "Ativo",
  "data_de_inicio" : "2023-01-01",
  "data_de_fim" : "2024-01-01",
  "cliente" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}