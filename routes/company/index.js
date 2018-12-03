var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').product;

routes.post('/company/add',helpers.addCompany);
routes.get('/company/:companyId',helpers.getCompany);
routes.get('/company',helpers.getCompanies);
routes.put('/company/edit',helpers.editCompany);
routes.delete('/company/delete',helpers.deleteCompany);
module.exports = routes;