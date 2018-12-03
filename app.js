var app = require('express')();
const env = require('./config/env');
//var cors = require('cors');
//app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const database = require('./database');
global.__baseUrl = __dirname;
const server = app.listen(env.SERVER_PORT, function () {
    console.info('Server Started At ', env.SERVER_PORT);
    database.connectDB(err => {
        if (!err) {
            console.info('Mongodb Connected Successfully!');
           // app.use(cors());
            require('./routes').bindAPI(app);
        } else {
            console.error('Mongodb Connection Failed!', err);
        }
    })
})

process.on('uncaughtException', function (error) {
    console.log("error", error);
});
