

var env = {
  SERVER_PORT: process.env.PORT || 9191,
  DB_HOST: 'localhost',
  DB_USERNAME: '',
  DB_PASWORD: '',
  // DB_NAME: 'heroku_3tn4qs1k',
  DB_NAME: 'munchies',
  // DB_PORT: 37149,
  DB_PORT: 27017,
}

env.DB_URL = `mongodb://munchies:munchies12345@ds137149.mlab.com:37149/heroku_3tn4qs1k`;
// env.DB_URL = `mongodb://${env.DB_HOST}/${env.DB_PORT}/`;
// env.HOST_NAME = `http://localhost:${env.SERVER_PORT}/`;
env.HOST_NAME = `https://dev-munchies.herokuapp.com/`;
module.exports = env;