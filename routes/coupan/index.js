

var routes = require('express').Router();
const helpers = require('./helpers');

const validation = require('../../validations').coupan;
const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES

// routes.post('/coupan',permit(ADMIN),...validation.add,helpers.addCoupan);
// routes.get('/coupan/:coupanId',permit(ADMIN),helpers.getCoupan);
// routes.get('/coupan',permit(ADMIN),helpers.getCoupans);
// routes.delete('/coupan/:coupanId',permit(ADMIN),helpers.deleteCoupan);
// routes.put('/coupan',permit(ADMIN),helpers.editCoupan);
// routes.put('/coupan/apply',permit(ADMIN,USER),helpers.applyCoupan);

routes.post('/coupan',...validation.add,helpers.addCoupan);
routes.get('/coupan/:coupanId',helpers.getCoupan);
routes.get('/coupan',helpers.getCoupans);
routes.delete('/coupan/:coupanId',helpers.deleteCoupan);
routes.put('/coupan',helpers.editCoupan);
routes.put('/coupan/apply',helpers.applyCoupan);
module.exports = routes;