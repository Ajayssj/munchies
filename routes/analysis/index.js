var routes = require('express').Router();
const helpers = require('./helpers');


routes.get('/analysis/most/used/plan',helpers.getMostUsedPlan);

module.exports = routes;