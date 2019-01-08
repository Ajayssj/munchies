
// const envirnoment = (process.env.NODE_ENV)?process.env.NODE_ENV.trim():'';
const envirnoment = process.env.NODE_ENV.trim();

var env = {
  SERVER_PORT: process.env.PORT || 9191,
  DB_HOST: (envirnoment === 'development')?'localhost':'https://dev-munchies.herokuapp.com/',
  DB_USERNAME: '',
  DB_PASWORD: '',
  DB_NAME: (envirnoment === 'development')?'munchies':'heroku_3tn4qs1k',
  DB_PORT: (envirnoment === 'development')? 27017 : 37149,
//   EMAIL_ORIGIN : 'http://localhost:3000',
  MY_ORIGIN : 'http://dev-munchies.herokuapp',
  EMAIL_ORIGIN : 'http://mails.xsella.com',
  GREEN_TEA_PRICE : 39,
  PASSWORD_RESET_EXPIRY : 30, // in menutes
}
env.DB_URL = (envirnoment === 'development')?`mongodb://${env.DB_HOST}/${env.DB_PORT}/`:`mongodb://munchies:munchies12345@ds137149.mlab.com:37149/heroku_3tn4qs1k`;
env.HOST_NAME = (envirnoment === 'development')?`http://localhost:${env.SERVER_PORT}/`:`https://dev-munchies.herokuapp.com/`;
module.exports = env;
