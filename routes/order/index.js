var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').order;
const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES

routes.post('/order/createOrder', permit(ADMIN,USER), ...validation.create ,helpers.createOrder);
routes.get('/order/getMyorders', permit(ADMIN,USER),helpers.getMyorders);
routes.delete('/order/deleteMyorder', permit(ADMIN,USER),helpers.deleteMyorder);
routes.put('/order/editOrder', permit(ADMIN,USER),helpers.editOrder);
routes.put('/order/accept/:orderId', permit(ADMIN,USER),helpers.acceptOrder);
routes.get('/order/getAllOrders', permit(ADMIN), ...validation.getAll ,helpers.getAllOrders);
module.exports = routes;