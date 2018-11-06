const ROLES = require('../config/constants').ROLES;
module.exports =  (req,res,next) => {
        if(req.session.user.role ==  ROLES.ADMIN)
            next();
        else
            res.json({error : 'Unauthorized Access'})
    }