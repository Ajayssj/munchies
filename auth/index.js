

module.exports = {
    isLoggedIn : (req,res,next) => {
        const user = req.session.user;
        if(user){
            next();
        }else{
            res.json({success : false, error : 'You are not logged In!', code : 401})
            // res.redirect('/login');
        }
    }
}