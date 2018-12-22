var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').product;

const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES

routes.post('/type/add', permit(ADMIN) ,helpers.addType);
routes.get('/type/:typeId', permit(ADMIN),helpers.getType);
routes.get('/type', permit(ADMIN),helpers.getTypes);
routes.put('/type/edit', permit(ADMIN),helpers.editType);
routes.delete('/type/delete', permit(ADMIN),helpers.deleteType);
routes.get('/type/company/:companyId', permit(ADMIN),helpers.getCompanyTypes);
module.exports = routes;