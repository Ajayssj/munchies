const ROLES = require('../config/constants').ROLES;
module.exports =  (req,res,next) => {
        if(req.session.user.role ==  ROLES.ADMIN)
            next();
        else if(req.path.indexOf('/api/plan/active/') > -1)
            next()
        else
            res.status(401).json({success : false, error : 'Unauthorized Access'})
    }