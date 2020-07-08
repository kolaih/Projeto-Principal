const express = require('express');

const PagadorController = require('./Controllers/PagadorController')
const OwnerController = require('./Controllers/OwnerController')

const routes = express.Router();

routes.get('/pagador', PagadorController.index);
routes.post('/pagador', PagadorController.store);

routes.get('/pagador/:pagador_id/owner', OwnerController.index);

routes.post('/pagador/:pagador_id/owner', OwnerController.store);

module.exports = routes;
