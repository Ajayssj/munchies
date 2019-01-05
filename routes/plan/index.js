var routes = require('express').Router();
const helpers = require('./helpers');
const validation = require('../../validations').plan;
const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES
routes.get('/plan/active/:userId',permit(ADMIN,USER),helpers.getActivePlans);
// routes.put('/plan/active/:activePlanId/skip-week/:weekId/:week',helpers.skipActivePlanWeek);
routes.put('/plan/active/:activePlanId/skip-week',permit(ADMIN,USER),helpers.skipActivePlanWeek);

routes.put('/plan/active/:activePlanId/undo-skip-week/:weekId',permit(ADMIN,USER),helpers.undoSkippedActivePlanWeek);
routes.get('/plan/customize/:activePlanId',permit(ADMIN),helpers.getCustmoizedPlan);
routes.get('/plan/customize/:activePlanId/week/:weekId',permit(ADMIN),helpers.getCustmoizedPlanByWeek);
routes.put('/plan/deactivate/:activePlanId',permit(ADMIN),helpers.deactivatePlan);
routes.put('/plan/activate/:activePlanId',permit(ADMIN),helpers.activatePlan);
routes.delete('/plan/delete/:activePlanId',permit(ADMIN),helpers.deletePlan);
/*
    when added succesfully update isCustom flag to true
 */
routes.post('/plan/active/:planId/product/:productId/week/:weekId',helpers.addProductInPlan) 
routes.delete('/plan/active/:planId/product/:productId/week/:weekId',helpers.deleteProductFromPlan)


routes.post('/plan/core/add',permit(ADMIN),...validation.core.add ,helpers.addCorePlan);
routes.get('/plan/core/',permit(ADMIN,USER),helpers.getCorePlans);
routes.delete('/plan/core/delete',permit(ADMIN),helpers.deleteCorePlan);
routes.put('/plan/core/edit',permit(ADMIN), ...validation.core.edit ,helpers.editCorePlan);

routes.get('/plan/customer/info/:activePlanId',permit(ADMIN),helpers.getCustomerInfo);

// get core plans list sorted by week ASC order 
routes.get('/plan/core/:planId',permit(ADMIN),helpers.getCorePlan);
// get products of perticular plan and week 
routes.get('/plan/core/:planId/week/:week',permit(ADMIN),helpers.getCorePlanProducts);
// add product into core plans's week only
routes.post('/plan/core/product/:productId/week/:week',permit(ADMIN),helpers.addProductsInCorePlanWeek);
// delete product into core plans's week only
routes.delete('/plan/core/product/:productId/week/:week',permit(ADMIN),helpers.deleteProductsFromCorePlanWeek);
// add product into core plan and week
routes.post('/plan/core/:planId/product/:productId/week/:week',permit(ADMIN),helpers.addProductsInCorePlan);
//  delete product from core plan and week
routes.delete('/plan/core/:planId/product/:productId/week/:week',permit(ADMIN),helpers.deleteProductFromCorePlan)
// 

module.exports = routes;
