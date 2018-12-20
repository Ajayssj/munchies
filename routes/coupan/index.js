

var routes = require('express').Router();
const helpers = require('./helpers');

const validation = require('../../validations').coupan;

routes.post('/coupan',...validation.add,helpers.addCoupan);
routes.get('/coupan/:coupanId',helpers.getCoupan);
routes.get('/coupan',helpers.getCoupans);
routes.delete('/coupan/:coupanId',helpers.deleteCoupan);
routes.put('/coupan',helpers.editCoupan);
routes.put('/coupan/apply',helpers.applyCoupan);


module.exports = routes;