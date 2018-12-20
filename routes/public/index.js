

var routes = require('express').Router();
const public = require('./helpers');
const validation = require('../../validations').user;

routes.post('/user/password/recover',validation.login,public.passwordRecovery);
routes.post('/user/register',...validation.register,public.register);

routes.post('/user/verifyFirebaseToken',public.verifyFirebaseToken);

// routes.get('/user',public.getAllUsers);

routes.post('/user/password/reset', ...validation.resetPassword ,public.passwordReset);

module.exports = routes;