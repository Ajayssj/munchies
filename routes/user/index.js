var routes = require('express').Router();
const user = require('./helpers');
const validation = require('../../validations').user;

routes.post('/user/login',validation.login,user.login);
routes.post('/user/register',validation.register,user.register);
routes.post('/user/password/recover',validation.login,user.passwordRecovery);
routes.post('/user/password/changepassword',validation.login,user.changepassword);
routes.post('/user/verifyFirebaseToken',validation.login,user.verifyFirebaseToken);
routes.get('/user',user.getAllUsers);


routes.post('/user/password/reset/:cipherEmail',validation.resetPassword,user.passwordReset);

module.exports = routes;