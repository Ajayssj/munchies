var routes = require('express').Router();
const helpers = require('./helpers');
routes.post('/order/createOrder',helpers.createOrder);
routes.post('/order/getMyorders',helpers.getMyorders);
routes.post('/order/deleteMyorder',helpers.deleteMyorder);
routes.post('/order/editOrder',helpers.editOrder);


module.exports = routes;