var crypto = require('crypto');
const credentionals = require('../config/credentials');
const env = require('../config/env');
const nodemailer = require('nodemailer');

module.exports = {
   createHash : function(data){
        return crypto.createHash('md5').update(data).digest('hex')
   },
   createPasswordRecoveryLink : function(cipherEmail){
     return `${env.HOST_NAME}api/user/password/recover/${cipherEmail}`;
   },
   sendRecoveryPasswordEmail : function(email,callback){

    let transporter = nodemailer.createTransport(credentionals.MAIL_CRED);
    // setup email data with unicode symbols
    let mailOptions = {
        from: credentionals.MAIL_CRED.auth.user, // sender address
        to: email, // list of receivers
        subject: 'Password Recovery Mail', // Subject line
        text: '', // plain text body
        html: '<a href="'+ this.createPasswordRecoveryLink(this.encrypt(email)) +'"><b>Click Here To Reset Password</b></a>' // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) 
            callback({result : false, error : error});
        else
            callback({result : true, info });
    });
   },
   sendRegistrationEmail : function(dataObj,callback){
       console.log("sendRegistrationEmail called==>",dataObj.email,dataObj.password);
       
    let transporter = nodemailer.createTransport(credentionals.MAIL_CRED);
    // setup email data with unicode symbols
    let mailOptions = {
        from: credentionals.MAIL_CRED.auth.user, // sender address
        to: dataObj.email, // list of receivers
        subject: 'Registration Mail', // Subject line
        text: '', // plain text body
        html: 'Email:"'+dataObj.email +'"password:"'+dataObj.password+'" ', // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) 
            callback({result : false, error : error});
        else
            callback({result : true, info:info });
    });
   },
   encrypt : function(data){
    return crypto.createCipher('aes-128-cbc',credentionals.CRYPTO_Key).update(data, 'utf8', 'hex')
   },
   decrypt : function(cipher){
    return crypto.createDecipher('aes-128-cbc', credentionals.CRYPTO_Key).update(cipher, 'hex', 'utf8')
   }

}