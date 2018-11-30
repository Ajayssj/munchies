
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const User = db.getCollection('user');
const utils = require('../../utils');
var serviceAccount = require("../../constant/firebase.json");
var admin = require("firebase-admin");
var generator = require('generate-password');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-auth-fc6c2.firebaseio.com"
});

const isEmailExists = function (email) {
    return new Promise((success, error) => {
        User.findOne({ email: email }, function (err, result) {
            if (err)
                error(err);
            if (result)
                success(true);
            else
                success(false);
        });
    })
}

module.exports = {
    getAllUsers : (req,res) => {
        User.find().toArray()
        .then(users => {
            console.log("users", users);
            
            res.json({success : true, data : users})
        }).catch(err => res.json({success : false, error : err}))
    },
    login: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const email = req.body.email, password = utils.createHash(req.body.password);
            User.findOne({ email: email })
                .then(user => {
                    if (user) {
                        if (user.password === password) {
                            req.session.user = user;
                            res.json({ success: true, role: user.role || 2 });
                        } else
                            res.json({ success: false, error: 'Password is Invalid!' });
                    } else {
                        res.json({ success: false, error: 'Email is not found!' });
                    }

                }).catch(err => {
                    res.json({ success: false, error: 'Database Error : ' + err });
                })
        }

    },
    register: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const userObj = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: utils.createHash(req.body.password)
            }
            isEmailExists(userObj.email)
                .then((exists) => {
                    if (!exists) {
                        User.insertOne(userObj).then(user => {
                            req.session.user = user;
                            res.json({ success: true, user: user })
                        }).catch(err => {
                            res.json({ success: false, error: err });
                        })
                    } else {
                        res.json({ success: false, error: 'Email ID Already Exists!' });
                    }
                })
                .catch(err => {
                    console.error(err);
                    res.json({ success: false, error: 'Something Went Wrong!' });
                })
        }
    },
    passwordRecovery: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const email = req.body.email;
            console.log("Email to recover==>", email);

            isEmailExists(email)
                .then(exists => {
                    if (exists) {
                        utils.sendRecoveryPasswordEmail(email,
                            result => {
                                if (result.result)
                                    res.json({ success: true, message: 'Password Recovery Email Sent, Please Check Your Mail!' })
                                else
                                    res.json(result);
                            });
                    } else {
                        res.json({ success: false, error: 'Email ID Doest Exists!' });
                    }
                }).catch(err => {
                    res.json({ success: false, error: err });
                })
        }
    },
    changepassword: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const email = req.body.email;

            isEmailExists(email)
                .then(exists => {
                    if (exists) {
                        const password = utils.createHash(req.body.password.trim());
                        User.updateOne({ email: email }, { $set: { password: password } })
                            .then(passwordSet => {
                                res.json({ success: true, message: 'Password changed Successfully!' });
                            }).catch(err => {
                                res.json({ success: false, error: err });
                            })
                    } else {
                        res.json({ success: false, error: 'Email ID Doest Exists!' });
                    }
                }).catch(err => {
                    res.json({ success: false, error: err });
                })
        }
    },
    passwordReset: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const cipherEmail = req.params.cipherEmail
            const email = utils.decrypt(cipherEmail);
            console.log('Email : ' + email);
            isEmailExists(email)
                .then(exists => {
                    if (exists) {
                        const password = utils.createHash(req.body.password.trim());
                        User.updateOne({ email: email }, { $set: { password: password } })
                            .then(passwordSet => {
                                req.json({ success: true, message: 'Password Reset Successfully!' });
                            }).catch(err => {
                                req.json({ success: false, error: err });
                            })
                    } else {
                        res.json({ success: false, error: 'Email ID Doest Exists!' });
                    }
                }).catch(err => {
                    req.json({ success: false, error: err });
                })
        }
    },
    verifyFirebaseToken: (req, res) => {
        const errors = validationResult(req);
        console.log("verifyFirebaseToken Req==>", req.body);

        var token = req.body.token;
        console.log("toten from Client", token);

        admin.auth().verifyIdToken(token)
            .then(function (decodedToken) {
                console.log("verifyIdToken==>", decodedToken);

                User.findOne({ email: decodedToken.email })
                    .then(user => {
                        if (user) {
                            req.session.user = user;
                            res.json({ success: true });
                            console.log("Session user==>", req.session.user);


                        } else {
                            var password = generator.generate({
                                length: 10,
                                numbers: true
                            });

                            if (password.length) {
                                const userObj = {
                                    email: decodedToken.email,
                                    password: utils.createHash(password)
                                }
                                console.log("user Not registered Password Created==>", password);

                                User.insertOne(userObj).then(user => {
                                    // req.session.user = user;

                                    // utils.sendRegistrationEmail(email,password).then(
                                    //     result =>{
                                    //         if(result.result)
                                    //             res.json({success : true, message : 'Successfully Registered,Please Check Your Mail!'})
                                    //         else
                                    //             res.json(result);
                                    //     }).catch(err => {
                                    //         console.log("user inserted  Email not send==>",user);

                                    //         res.json({success : false, error : err});
                                    //     });
                                    var dataObj = {
                                        email: decodedToken.email,
                                        password: password
                                    }
                                    console.log("DataObj==>", dataObj);

                                    utils.sendRegistrationEmail(dataObj,
                                        result => {
                                            if (result.result) {
                                                console.log("mail Send", result);

                                                res.json({ success: true, message: 'Successfully Registered,Please Check Your Mail!' })

                                            }
                                            else {
                                                console.log("mail Not Send", result);
                                                res.json({ success: false, message: 'Registration Fail' });

                                            }
                                        })

                                    // res.json({success : true, user : user})
                                })
                                // }).catch(err => {
                                //     console.log("user insert false==>",user);

                                //     res.json({success : false, error : err});
                                // })


                            }

                        }
                    }).catch(err => {
                        res.json({ success: false, error: 'Database Error : ' + err });
                    })


            }).catch(function (error) {
                console.log("verifyIdToken Error==>", error);

                cb(error)
            })

    }


}