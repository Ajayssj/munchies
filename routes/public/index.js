

var routes = require('express').Router();
const public = require('./helpers');
const validation = require('../../validations').user;

routes.post('/user/password/recover',...validation.forgotPassword,public.passwordRecovery);
routes.post('/user/register',...validation.register,public.register);
routes.post('/user/login',...validation.login,public.login);

routes.post('/user/verifyFirebaseToken',public.verifyFirebaseToken);
routes.get('/user/islogged',public.isUserLoggedIn);
// routes.get('/user',public.getAllUsers);
routes.get('/user/logout',public.logout);
routes.post('/user/password/reset', ...validation.resetPassword ,public.passwordReset);

module.exports = routes;