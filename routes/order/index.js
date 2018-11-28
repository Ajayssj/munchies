var routes = require('express').Router();
const helpers = require('./helpers');
routes.post('/order/createOrder',helpers.createOrder);
routes.get('/order/getMyorders',helpers.getMyorders);
routes.post('/order/deleteMyorder',helpers.deleteMyorder);
routes.put('/order/editOrder',helpers.editOrder);


module.exports = routes;