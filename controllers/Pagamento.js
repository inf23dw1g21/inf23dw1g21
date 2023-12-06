'use strict';

var utils = require('../utils/writer.js');
var PagamentoS = require('../service/PagamentoService');

module.exports.pagamentoGET = function pagamentoGET (req, res, next) {
  PagamentoS.pagamentoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamentoPOST = function pagamentoPOST (req, res, next, body) {
  PagamentoS.pagamentoPOST(body)
    .then(Pagamento.pagamento_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idGET = function pagamento_idGET (req, res, next, id) {
  PagamentoS.pagamento_idGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idPUT = function pagamento_idPUT (req, res, next, body, id) {
  PagamentoS.pagamento_idPUT(body, id)
    .then(Pagamento.pagamento_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idDELETE = function pagamento_idDELETE (req, res, next, id) {
  PagamentoS.pagamento_idDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idclienteGET = function pagamento_idclienteGET (req, res, next, id) {
  PagamentoS.pagamento_idclienteGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
