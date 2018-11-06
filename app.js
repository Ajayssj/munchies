var app = require('express')();
const env = require('./config/env');
const database = require('./database');
global.__baseUrl = __dirname;
const server = app.listen(env.SERVER_PORT, function () {
    console.info('Server Started At ', env.SERVER_PORT);
    database.connectDB(err => {
        if (!err) {
            console.info('Mongodb Connected Successfully!');
            require('./routes').bindAPI(app);
        } else {
            console.error('Mongodb Connection Failed!', err);
        }
    })
})

