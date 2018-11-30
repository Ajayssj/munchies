var routes = require('express').Router();
const helpers = require('./helpers');

routes.get('/plan/active/:userId',helpers.getActivePlans);
routes.put('/plan/active/:activePlanId/skip-week/:week',helpers.skipActivePlanWeek);
routes.get('/plan/customize/:activePlanId',helpers.getCustmoizedPlan);
routes.get('/plan/customize/:activePlanId/week/:week',helpers.getCustmoizedPlanByWeek);
routes.get('/plan/deactivate/:activePlanId',helpers.deactivatePlan);
routes.get('/plan/activate/:activePlanId',helpers.activatePlan);
routes.get('/plan/delete/:activePlanId',helpers.deletePlan);

routes.post('/plan/core/add',helpers.addCorePlan);
routes.get('/plan/core/',helpers.getCorePlans);
routes.delete('/plan/core/delete',helpers.deleteCorePlan);
routes.post('/plan/core/edit',helpers.editCorePlan);

routes.post('/plan/active/:planId/product/:productId/week/:week',helpers.addProductInPlan);
routes.delete('/plan/active/:planId/product/:productId/week/:week',helpers.deleteProductFromPlan);
routes.post('/plan/core/:planId/product/:productId/week/:week',helpers.addProductInPlan);
routes.delete('/plan/core/:planId/product/:productId/week/:week',helpers.deleteProductFromPlan);

module.exports = routes;