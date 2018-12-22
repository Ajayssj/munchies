var routes = require('express').Router();
const helpers = require('./helpers');

const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES

routes.get('/analysis/most/used/plan',permit(ADMIN),helpers.getMostUsedPlan);
routes.get('/analysis/most/delivered/area',permit(ADMIN),helpers.getDeliveredArea);
routes.get('/analysis/most/allergic',permit(ADMIN),helpers.getAllergic);
routes.get('/analysis/most/liked/fruits',permit(ADMIN),helpers.getMostLikedFruits);
routes.get('/analysis/subscribers',permit(ADMIN),helpers.getSubscribers);
routes.get('/analysis/total/order/value',permit(ADMIN),helpers.getTotalOrderValue);

module.exports = routes;