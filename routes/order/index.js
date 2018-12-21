var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').order;

routes.post('/order/createOrder', ...validation.create ,helpers.createOrder);
routes.get('/order/getMyorders',helpers.getMyorders);
routes.delete('/order/deleteMyorder',helpers.deleteMyorder);
routes.put('/order/editOrder',helpers.editOrder);

routes.get('/order/getAllOrders',helpers.getAllOrders);
module.exports = routes;