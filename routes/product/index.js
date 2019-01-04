var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').product;

const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES

routes.post('/product/add', permit(ADMIN),helpers.addProduct);
routes.get('/product/:productId', permit(ADMIN) ,helpers.getProduct);
routes.get('/product', permit(ADMIN) ,helpers.getProducts);
routes.post('/product/edit', permit(ADMIN)  ,helpers.editProduct);
routes.delete('/product/delete/:productId', permit(ADMIN) ,helpers.deleteProduct);
module.exports = routes;