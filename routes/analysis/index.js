var routes = require('express').Router();
const helpers = require('./helpers');


routes.get('/analysis/most/used/plan',helpers.getMostUsedPlan);
routes.get('/analysis/most/delivered/area',helpers.getDeliveredArea);

module.exports = routes;