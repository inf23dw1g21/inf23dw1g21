'use strict';

var utils = require('../utils/writer.js');
var Plano = require('../service/PlanoService');

module.exports.cliente_idplanoGET = function cliente_idplanoGET (req, res, next, id) {
  Plano.cliente_idplanoGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominio_idclienteGET = function dominio_idclienteGET (req, res, next, id) {
  Plano.dominio_idclienteGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.planoGET = function planoGET (req, res, next) {
  Plano.planoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.planoPOST = function planoPOST (req, res, next, body) {
  Plano.planoPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idDELETE = function plano_idDELETE (req, res, next, id) {
  Plano.plano_idDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idGET = function plano_idGET (req, res, next, id) {
  Plano.plano_idGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idPUT = function plano_idPUT (req, res, next, body, id) {
  Plano.plano_idPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
