const ROLES = require('../config/constants').ROLES;
module.exports =  (req,res,next) => {
        if(req.session.user.role ==  ROLES.ADMIN)
            next();
        else if(req.path.indexOf('/api/plan/active/') > -1 || req.path.indexOf('/api/order/getMyOrders') > -1 || req.path.indexOf('/api/order/createOrder') > -1)
            next()
        else
            res.status(401).json({success : false, error : 'Permission Denied'})
    }