const express = require('express');

const CREDENTIALS = require('../config/credentials');
const PERMISSIONS = require('../config/constants').PERMISSIONS;
module.exports = {
    bindRoutes: function (app) {
        const userApi = require('./user');
        const productApi = require('./product');
        const planApi = require('./plan');
        const ordrApi = require('./order');

        app.use('/api', userApi);
        app.use('/api', productApi);
        app.use('/api', planApi);
        app.use('/api', ordrApi)
        app.use(express.static('client'));
        app.get('/*', (req, res) => res.sendFile(__baseUrl + '/client/'));
    },
    bindMiddleware: function (app) {
        app.use(function (req, res, next) {
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           next();
       });
        var bodyParser = require('body-parser');
        var session = require('express-session');
        app.use(session({ secret: CREDENTIALS.SESSION_SECRET_KEY, resave: false, saveUninitialized: true }));
        app.use(bodyParser.json());
    },
    bindAuth: function (app) {
        const auth = require('../auth');
        const isAdmin = require('../permissions');
        app.all(PERMISSIONS.AUTH_URLs, auth.isLoggedIn);
        app.all(PERMISSIONS.ADMIN_URLs, isAdmin);
    },
    bindAPI: function (app) {
        this.bindMiddleware(app);
        this.bindAuth(app);
        this.bindRoutes(app);
    }
}
