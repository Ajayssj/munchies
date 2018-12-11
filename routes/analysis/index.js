var routes = require('express').Router();
const helpers = require('./helpers');


routes.get('/analysis/most/used/plan',helpers.getMostUsedPlan);
routes.get('/analysis/most/delivered/area',helpers.getDeliveredArea);
routes.get('/analysis/most/allergic',helpers.getAllergic);
routes.get('/analysis/most/liked/fruits',helpers.getMostLikedFruits);

module.exports = routes;