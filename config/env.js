

var env = {
    SERVER_PORT : 9191,
    DB_HOST : 'localhost',
    DB_USERNAME : '',
    DB_PASWORD : '',
    DB_NAME : 'manchief',
    DB_PORT : 27017,
}

env.DB_URL = `mongodb://${env.DB_HOST}/${env.DB_PORT}/`;
env.HOST_NAME = `http://localhost:${env.SERVER_PORT}/`;
module.exports = env;