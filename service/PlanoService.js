'use strict';


/**
 *
 * id Long 
 * returns List
 **/
exports.cliente_idplanoGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "tipo_de_plano" : "Básico",
  "periodicidade" : "Mensal",
  "preco" : 9.99,
  "armazenamento" : "10GB",
  "numero_de_contas_email" : 1,
  "numero_de_dominios" : 1,
  "largura_de_banda" : "100Gb/s",
  "fidelizacao" : "Nenhuma"
}, {
  "id" : 0,
  "tipo_de_plano" : "Básico",
  "periodicidade" : "Mensal",
  "preco" : 9.99,
  "armazenamento" : "10GB",
  "numero_de_contas_email" : 1,
  "numero_de_dominios" : 1,
  "largura_de_banda" : "100Gb/s",
  "fidelizacao" : "Nenhuma"
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
 * id Long 
 * returns List
 **/
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


/**
 *
 * returns List
 **/
exports.planoGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "tipo_de_plano" : "Básico",
  "periodicidade" : "Mensal",
  "preco" : 9.99,
  "armazenamento" : "10GB",
  "numero_de_contas_email" : 1,
  "numero_de_dominios" : 1,
  "largura_de_banda" : "100Gb/s",
  "fidelizacao" : "Nenhuma"
}, {
  "id" : 0,
  "tipo_de_plano" : "Básico",
  "periodicidade" : "Mensal",
  "preco" : 9.99,
  "armazenamento" : "10GB",
  "numero_de_contas_email" : 1,
  "numero_de_dominios" : 1,
  "largura_de_banda" : "100Gb/s",
  "fidelizacao" : "Nenhuma"
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
 * body Plano Plano que precisa ser adicionado , editado ou removido do negocio (optional)
 * no response value expected for this operation
 **/
exports.planoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.plano_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Long 
 * returns plano
 **/
exports.plano_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "tipo_de_plano" : "Básico",
  "periodicidade" : "Mensal",
  "preco" : 9.99,
  "armazenamento" : "10GB",
  "numero_de_contas_email" : 1,
  "numero_de_dominios" : 1,
  "largura_de_banda" : "100Gb/s",
  "fidelizacao" : "Nenhuma"
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
 * body Plano Plano que precisa ser adicionado , editado ou removido do negocio (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.plano_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

