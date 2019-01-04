const request = require('request');

module.exports = {
    subscribeUser:(req,res) => {
        const email = req.params.email;
        // res.send(email)
        var options = {
            uri:"https://us7.api.mailchimp.com/3.0/lists/91e86cd360/members",
            method:"POST",
            headers:{
                "content-type": "application/json",
                "Authorization": "any " + process.env.MAILCHIMP_API_KEY,
                // user: 'anystring:8d50a55eaf85162d5d167f17c49c02da-us7',
            },
          //  "anystring":"anystring:571d24b50a217608a00f3e640dfa10fc-us7",
            json:{
                email_address:email,
                "status":"subscribed"
            }
        }
        request(options,function(error,response,body){
            if(error) {
                res.json({
                    isError:true,
                    reason:error,
                })
                return;
            }
            res.json({
                body
            })
        })   
    }
}