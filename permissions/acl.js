const ROLES = require('../config/constants').ROLES;

module.exports ={
    [ROLES.ADMIN] : {
        apiURLs :  ['/api/plan/core/*'],
    } 
}