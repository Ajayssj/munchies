var crypto = require('crypto');
const credentionals = require('../config/credentials');
const env = require('../config/env');
const nodemailer = require('nodemailer');
var request = require("request");

const sendMailRemotely = function(data,cb){
    var options = { 
        method: 'GET',
        url: env.EMAIL_ORIGIN + '/sendMail',
        qs: data,
        headers: 
        { 'postman-token': 'a5408ac3-1715-1d10-d51f-28bdf6576696',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded' },
        form: {} };

        request(options, function (error, response, body) {
        if (error)  cb({success : false, error : error});
        if(JSON.parse(body).success)
            cb({success : true, body});
        else
            cb({success : false, error : 'Email Not Sent, Something Went Wrong'})
        console.log(body);
    });

}

module.exports = {
   createHash : function(data){
        return crypto.createHash('md5').update(data).digest('hex')
   },
   createPasswordRecoveryLink : function(cipherEmail){
    //  return `${env.HOST_NAME}api/user/password/recover/${cipherEmail}`;
     return `${env.HOST_NAME}/reset-password/${cipherEmail}`;
   },
   sendRecoveryPasswordEmail : function(email,callback){

    /* let transporter = nodemailer.createTransport(credentionals.MAIL_CRED);
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
    }); */
    let data = { link : this.createPasswordRecoveryLink(this.encrypt(email)), type : 2, to : email }
     sendMailRemotely(data,callback);
   },
   sendSkippedWeekMail : function(info,callback){
/* 
    let transporter = nodemailer.createTransport(credentionals.MAIL_CRED);
    // setup email data with unicode symbols
    let mailOptions = {
        from: credentionals.MAIL_CRED.auth.user, // sender address
        to: info.admin, // list of receivers
        subject: `week number ${info.week} skipped by ${info.user.firstName} ${info.user.lastName}`, // Subject line
        text: '', // plain text body
        html: `<h1> week number ${info.week} skipped by ${info.user.firstName} ${info.user.lastName} <br> Email :  ${info.user.email}</h1>` // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) 
            callback({result : false, error : error});
        else
            callback({result : true, info });
    }); */
    const data = {firstName : info.user.firstName, lastName : info.user.lastName, week : info.week, to : info.admin, email : info.user.email, nexWeekDate , type : 1}
    sendMailRemotely(data,callback);
   },
   sendRegistrationEmail : function(dataObj,callback){
       console.log("sendRegistrationEmail called==>",dataObj.email,dataObj.password);
       
    /* let transporter = nodemailer.createTransport(credentionals.MAIL_CRED);
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
    }); */
    const data = { email :dataObj.email , type : 3, password : dataObj.password, to : dataObj.email}
    sendMailRemotely(data,callback);
   },
   encrypt : function(data){
    let cipher = crypto.createCipher('aes-128-cbc',credentionals.CRYPTO_Key);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
   },
   decrypt : function(cipher){
    let decipher = crypto.createDecipher('aes-128-cbc', credentionals.CRYPTO_Key);
    return decipher.update(cipher, 'hex', 'utf8') + decipher.final('utf8');
   }

}