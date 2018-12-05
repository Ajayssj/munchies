var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').product;

routes.post('/product/add',validation.addProduct,helpers.addProduct);
routes.get('/product/:productId',helpers.getProduct);
routes.get('/product',helpers.getProducts);
routes.put('/product/edit',helpers.editProduct);
routes.delete('/product/delete/:productId',helpers.deleteProduct);
routes.get('/product',helpers.getProducts);
module.exports = routes;