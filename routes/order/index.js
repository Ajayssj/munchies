var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').order;

routes.post('/order/createOrder', ...validation.create ,helpers.createOrder);
routes.get('/order/getMyorders',helpers.getMyorders);
routes.delete('/order/deleteMyorder',helpers.deleteMyorder);
routes.put('/order/editOrder',helpers.editOrder);
routes.put('/order/accept/:orderId/:state',helpers.acceptOrder);

routes.get('/order/getAllOrders', ...validation.getAll ,helpers.getAllOrders);
module.exports = routes;