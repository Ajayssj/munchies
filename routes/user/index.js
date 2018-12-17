var routes = require('express').Router();
const user = require('./helpers');
const validation = require('../../validations').user;

routes.post('/user/login',validation.login,user.login);
routes.post('/user/register',validation.register,user.register);
routes.post('/user/password/recover',validation.login,user.passwordRecovery);
routes.post('/user/password/change',validation.login,user.changePassword);
routes.post('/user/verifyFirebaseToken',validation.login,user.verifyFirebaseToken);
routes.get('/user/getUserInfo',user.getUserInfo);
routes.get('/user',user.getAllUsers);

routes.post('/user/password/reset',user.passwordReset);

module.exports = routes;