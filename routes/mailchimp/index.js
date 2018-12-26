var routes = require('express').Router();
const helpers = require('./helpers');

routes.get('/mailchimp/subscribeUser/:email',helpers.subscribeUser);
module.exports = routes;