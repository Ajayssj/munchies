

module.exports = {
    isLoggedIn : (req,res,next) => {
        const user = req.session.user;
        if(user){
            next();
        }else{
            res.json('You are not logged In!')
            // res.redirect('/login');
        }
    }
}