var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').product;
const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES

routes.post('/company/add',permit(ADMIN),helpers.addCompany);
routes.get('/company/:companyId',permit(ADMIN),helpers.getCompany);
routes.get('/company',permit(ADMIN),helpers.getCompanies);
routes.put('/company/edit',permit(ADMIN),helpers.editCompany);
routes.delete('/company/delete',permit(ADMIN),helpers.deleteCompany);
module.exports = routes;