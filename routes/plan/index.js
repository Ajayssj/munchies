var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').plan;
routes.get('/plan/active/:userId',helpers.getActivePlans);
// routes.put('/plan/active/:activePlanId/skip-week/:weekId/:week',helpers.skipActivePlanWeek);
routes.put('/plan/active/:activePlanId/skip-week',helpers.skipActivePlanWeek);

routes.put('/plan/active/:activePlanId/undo-skip-week/:weekId',helpers.undoSkippedActivePlanWeek);
routes.get('/plan/customize/:activePlanId',helpers.getCustmoizedPlan);
routes.get('/plan/customize/:activePlanId/week/:weekId',helpers.getCustmoizedPlanByWeek);
routes.put('/plan/deactivate/:activePlanId',helpers.deactivatePlan);
routes.put('/plan/activate/:activePlanId',helpers.activatePlan);
routes.delete('/plan/delete/:activePlanId',helpers.deletePlan);
/*
    when added succesfully update isCustom flag to true
 */
routes.post('/plan/active/:planId/product/:productId/week/:weekId',helpers.addProductInPlan) 
routes.delete('/plan/active/:planId/product/:productId/week/:weekId',helpers.deleteProductFromPlan)


routes.post('/plan/core/add',...validation.core.add ,helpers.addCorePlan);
routes.get('/plan/core/',helpers.getCorePlans);
routes.delete('/plan/core/delete',helpers.deleteCorePlan);
routes.put('/plan/core/edit', ...validation.core.edit ,helpers.editCorePlan);

routes.get('/plan/customer/info/:activePlanId',helpers.getCustomerInfo);

// get core plans list sorted by week ASC order 
routes.get('/plan/core/:planId',helpers.getCorePlan);
// get products of perticular plan and week 
routes.get('/plan/core/:planId/week/:week',helpers.getCorePlanProducts);
// add product into core plans's week only
routes.post('/plan/core/product/:productId/week/:week',helpers.addProductsInCorePlanWeek);
// delete product into core plans's week only
routes.delete('/plan/core/product/:productId/week/:week',helpers.deleteProductsFromCorePlanWeek);
// add product into core plan and week
routes.post('/plan/core/:planId/product/:productId/week/:week',helpers.addProductsInCorePlan);
//  delete product from core plan and week
routes.delete('/plan/core/:planId/product/:productId/week/:week',helpers.deleteProductFromCorePlan)
// 

module.exports = routes;
