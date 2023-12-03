'use strict';


/**
 *
 * returns List
 **/
exports.pagamentoGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "valor" : 9.99,
  "metodo_de_pagamento" : "cartao de credito",
  "numero_de_transacao" : "CGD54848488",
  "cliente" : 1
}, {
  "id" : 0,
  "valor" : 9.99,
  "metodo_de_pagamento" : "cartao de credito",
  "numero_de_transacao" : "CGD54848488",
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
 * body Pagamento Pagamento que precisa ser adicionado , editado ou removido do negocio (optional)
 * no response value expected for this operation
 **/
exports.pagamentoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.pagamento_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * returns pagamento
 **/
exports.pagamento_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "valor" : 9.99,
  "metodo_de_pagamento" : "cartao de credito",
  "numero_de_transacao" : "CGD54848488",
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
 * body Pagamento Pagamento que precisa ser adicionado , editado ou removido do negocio (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.pagamento_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * returns List
 **/
exports.pagamento_idclienteGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "valor" : 9.99,
  "metodo_de_pagamento" : "cartao de credito",
  "numero_de_transacao" : "CGD54848488",
  "cliente" : 1
}, {
  "id" : 0,
  "valor" : 9.99,
  "metodo_de_pagamento" : "cartao de credito",
  "numero_de_transacao" : "CGD54848488",
  "cliente" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

