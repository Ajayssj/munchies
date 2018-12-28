const { validationResult } = require('express-validator/check');

const db = require('../../database');

const Order = db.getCollection('orders');
const Coupan = db.getCollection('coupans');
const utils = require('../../utils');
var cc = require('coupon-code');
let moment = require('moment-timezone');

const canBeApply = function(coupan,callback){
    Order.aggregate(
        [
            {
                $match : {
                    userId :db.toObjectID(coupan.userId),
                    coupanId : db.toObjectID(coupan._id)
                }
            },
            {
                $group: {
                   _id : '$coupanId',
                    used: {
                            $sum: 1
                        }
                    
                }
            },
            // {
            //     $project : {
            //         info : { $cond : {$eq: [ "$_id", db.toObjectID(coupan._id)]}}
            //     }
            // }
            /* {
                $project : {
                    info: {
                        $filter: {
                            input: "$_id",
                            as: "id",
                            cond: { $eq: [ "$$id", db.toObjectID(coupan._id)] }
                            }
                        }
                    }
                
            } */
    
        ]
    ).toArray().then(result => {
        if(result.length && coupan.frequency > result[0].used)
            callback({success : true, data : result});
        else if(!result.length)
            callback({success : true, data : result});
        else
            callback({success : false, error : 'You can use this coupan more than ' + coupan.frequency})

    }).catch(err => callback({success : false, error : err}));
}

const isCoupanExists = function(code){
    return new Promise((success,error) =>{
         Coupan.findOne({code : code},function(err,result){
             if(err)
                 error(err);
             if(result)
                 success(result);
             else
                 success(false);
         });
    })
 }
const isCoupanExpired  = function(expiry){
    let expiryDate = new Date(moment(expiry).tz('Asia/Calcutta').format()).getTime();
    let currentDate = new Date(moment().tz('Asia/Calcutta').format()).getTime();
    return currentDate > expiryDate;
}
module.exports = {
    addCoupan : (req,res) => {
        const coupan = req.body.coupan;
        isCoupanExists(coupan).then(exists => {
            if(!exists){
            const title = req.body.title;
            const frequency = req.body.frequency;
            const discount = req.body.discount;
            const description = req.body.description;
            const expiryDate = new Date(moment(req.body.expiry).tz('Asia/Calcutta').format());
            const type = Number(req.body.type);
            Coupan.insertOne({title,code : coupan, expiry : expiryDate, discount : parseFloat(discount), frequency : Number(frequency),description, type})
                .then(result => {
                    res.json({ success : true, message : 'Coupan code created!'})
                }).catch(err =>{
                res.json({ success : false, error : err});
                });
            }else{
                res.json({success : false, error : 'Coupan code already exists generate new one!'})
            }
        }).catch(err => res.json({ success : false, error : err}));
    },
    getCoupan : (req,res) =>{
        const CoupanId = req.params.coupanId;
        if(CoupanId){
            Coupan.findOne({_id : db.toObjectID(CoupanId)})
            .then(coupan => {
                if(coupan)
                    res.json({success : true, data : coupan});
                else
                    res.json({success : false, error : 'Coupan Not Found!' });
            }).catch(err => {
                res.json({success : false, error : err });
            })
        }else{
            res.json({success : false, error : 'Coupan Id is required!' });
        }
    },
    getCoupans : (req,res) =>{
        Coupan.find({}).toArray().then(coupans => {
            res.json({success : true, data  : coupans});
        }).catch(err =>{
            res.json({success : false, error : err});
        })
    },
    deleteCoupan : (req,res) => {
        const coupanId = req.params.coupanId;
        if(coupanId){
            Coupan.findOneAndDelete({_id : db.toObjectID(coupanId)})
            .then(coupan => {
                if(coupan){
                    res.json({success : true, message : 'Coupan Removed Successfully!' });
                }else
                    res.json({success : false, error : 'Coupan Not Found!' });
            }).catch(err => {
                res.json({success : false, error : err });
            })
        }else{
            res.json({success : false, error : 'Coupan Id is required!' });
        }
    },
    editCoupan : (req,res) => {
        const coupanId = req.body.coupanId;
        if(coupanId){
            const title = req.body.title;
            const frequency = req.body.frequency;
            const discount = req.body.discount;
            const description = req.body.description;
            const expiryDate = new Date(moment(req.body.expiry).tz('Asia/Calcutta').format());

            Coupan.updateOne({_id : db.toObjectID(coupanId)},
            {
                $set : {title, expiry : expiryDate, discount : parseFloat(discount), frequency : Number(frequency),description}
            }).then(coupan => {
                if(coupan.result.nModified == 1)
                    res.json({success : true, message : 'Coupan Modified Successfully!'})
                else
                    res.json({success : false, error : 'Coupan Not Found!'})
            }).catch(err => res.json({success : false, error : err}))
        }else{
            res.json({success : false, error : 'Coupan Id && Code is required!' });
        }
    },
    applyCoupan : (req,res) => {
        const coupan = req.body.coupan;
        const user = req.session.user;
        if(coupan && user){
            isCoupanExists(coupan).then(coupan => {
                if(coupan){
                    let expired = isCoupanExpired(coupan.expiry)
                    if(expired)
                        res.json({success : false, error : 'Coupan expired!'});
                    else{
                        coupan.userId = user._id;
                        canBeApply(coupan, function(should){
                            if(should.success){
                                // coupan = coupan.data;
                                res.json({success : true, data : coupan});
                            }else{
                                res.json(should);
                            }
                        })
                        
                    }
                     
                }else{
                    res.json({success : false, error : 'Coupan code does not exists!'})
                }
            }).catch(err => {
                res.json({success : false, error : err})
            })
        }else{
            res.json({success : false, error : 'Your Session expired Or Coupan not provided!'})
        }
    },  
    isValidCoupan : (coupanId,callback) =>{
        Coupan.findOne({_id : db.toObjectID(coupanId)})
            .then(coupan => {
                if(coupan){
                    const expired = isCoupanExpired(coupan.expiry)  
                    if(!expired){   
                        callback({success :true, data : coupan});
                    }else{
                        callback({success :false, error : 'This Coupan Expired!'});
                    }
                }else{
                    callback({success :false, error : 'Coupan Not Found!'});
                }
        }).catch(err =>  callback({ success : false, error : err}))
    }
}