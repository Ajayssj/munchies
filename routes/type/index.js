var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').product;

routes.post('/type/add',helpers.addType);
routes.get('/type/:typeId',helpers.getType);
routes.get('/type',helpers.getTypes);
routes.put('/type/edit',helpers.editType);
routes.delete('/type/delete',helpers.deleteType);
module.exports = routes;