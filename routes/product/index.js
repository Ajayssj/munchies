var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').product;

routes.post('/product/add',validation.addProduct,helpers.addProduct);
routes.get('/product/:productId',helpers.getProduct);
routes.post('/product/edit',helpers.editProduct);
routes.delete('/product/delete',helpers.deleteProduct);
module.exports = routes;