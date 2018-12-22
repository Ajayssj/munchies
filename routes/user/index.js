var routes = require('express').Router();
const user = require('./helpers');
const validation = require('../../validations').user;

const permit = require('../../permissions');
const { ADMIN, USER } = require('../../config/constants').ROLES

// routes.post('/user/login',...validation.login,user.login);
// routes.post('/user/register',validation.register,user.register);
// routes.post('/user/password/recover',validation.login,user.passwordRecovery);
routes.post('/user/password/change',permit(ADMIN,USER),...validation.changePassword,user.changePassword);
// routes.post('/user/verifyFirebaseToken',validation.login,user.verifyFirebaseToken);
routes.get('/user/getUserInfo',permit(ADMIN,USER),user.getUserInfo);
routes.put('/user/editUserInfo',permit(ADMIN,USER), ...validation.profile ,user.editUserInfo);
// routes.get('/user/getUserInfo',user.getUserInfo);
routes.get('/user/logout',permit(ADMIN,USER),user.logout);
routes.get('/user',permit(ADMIN),user.getAllUsers);

routes.post('/user/password/reset',permit(ADMIN,USER),user.passwordReset);

module.exports = routes;