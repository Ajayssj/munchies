const express = require('express');

const CREDENTIALS = require('../config/credentials');
const PERMISSIONS = require('../config/constants').PERMISSIONS;
module.exports = {
    bindRoutes: function (app) {
        const userApi = require('./user');
        const productApi = require('./product');
        const planApi = require('./plan');
        const ordrApi = require('./order');
		const typeApi = require('./type');
        const companyApi = require('./company');
        const analysisApi = require('./analysis');
        const publicApi = require('./public');
        const coupanApi = require('./coupan');

        app.use('/public/api',publicApi);
        app.use('/api', userApi);
        app.use('/api', productApi);
        app.use('/api', planApi);
        app.use('/api', ordrApi);
		app.use('/api',typeApi);
        app.use('/api',companyApi);
        app.use('/api',analysisApi);
        app.use('/api',coupanApi);
        app.use(express.static('client'));
        app.get('/*', (req, res) => res.sendFile(__baseUrl + '/client/'));

    },
    bindMiddleware: function (app,db) {

        app.use(function (req, res, next) {
            // res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
            next();
        });
        var bodyParser = require('body-parser');
        var session = require('express-session');
        const MongoStore = require('connect-mongo')(session);
        app.use(session({
            secret: CREDENTIALS.SESSION_SECRET_KEY, resave: false, saveUninitialized: true,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 // 24 hours
            },
            store: new MongoStore({ db: db})
        }));
        app.use(bodyParser.urlencoded({urlencoded : false}));
        app.use(bodyParser.json());
    },
    bindAuth: function (app) {
        const auth = require('../auth');
        const isAdmin = require('../permissions');
        app.all('/api/*', auth.isLoggedIn);
    
    },
    bindAPI: function (app,db) {
        this.bindMiddleware(app,db);
        this.bindAuth(app);
        this.bindRoutes(app);
    }
}
