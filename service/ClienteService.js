'use strict';


/**
 *
 * returns List
 **/
exports.clienteGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "nome" : "João Silva",
  "tipo_de_conta" : "Empresarial",
  "numero_fiscal" : "PT000000001",
  "email" : "exemplo@umaia.pt",
  "contacto" : 956656564,
  "plano" : 1,
  "periodicidade_de_pagamento" : "Mensal",
  "data_ultimo_pagamento" : "2023-11-30"
}, {
  "id" : 0,
  "nome" : "João Silva",
  "tipo_de_conta" : "Empresarial",
  "numero_fiscal" : "PT000000001",
  "email" : "exemplo@umaia.pt",
  "contacto" : 956656564,
  "plano" : 1,
  "periodicidade_de_pagamento" : "Mensal",
  "data_ultimo_pagamento" : "2023-11-30"
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
 * body Cliente Cliente a ser adicionado , editado ou removido do negocio. (optional)
 * no response value expected for this operation
 **/
exports.clientePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.cliente_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * returns cliente
 **/
exports.cliente_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "nome" : "João Silva",
  "tipo_de_conta" : "Empresarial",
  "numero_fiscal" : "PT000000001",
  "email" : "exemplo@umaia.pt",
  "contacto" : 956656564,
  "plano" : 1,
  "periodicidade_de_pagamento" : "Mensal",
  "data_ultimo_pagamento" : "2023-11-30"
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
 * body Cliente Cliente a ser adicionado , editado ou removido do negocio. (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.cliente_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

