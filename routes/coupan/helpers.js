const { validationResult } = require('express-validator/check');

const db = require('../../database');
const Coupan = db.getCollection('coupans');
const utils = require('../../utils');
var cc = require('coupon-code');
let moment = require('moment-timezone');


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
            Coupan.insertOne({title,code : coupan, expiry : expiryDate, discount : parseFloat(discount), frequency : Number(frequency),description})
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
        const coupan = req.body.coupan;
        if(coupanId && coupan){
            const title = req.body.title;
            const frequency = req.body.frequency;
            const discount = req.body.discount;
            const description = req.body.description;
            const expiryDate = new Date(moment(req.body.expiry).tz('Asia/Calcutta').format());

            Coupan.updateOne({_id : db.toObjectID(coupanId)},
            {
                $set : {title,code : coupan, expiry : expiryDate, discount : parseFloat(discount), frequency : Number(frequency),description}
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
        if(coupan){
            isCoupanExists(coupan).then(coupan => {
                if(coupan){
                    let expired = isCoupanExpired(coupan.expiry)
                    if(expired)
                        res.json({success : false, error : 'Coupan expired!'});
                    else{
                        res.json({success : true, data : coupan});
                    }
                     
                }else{
                    res.json({success : false, error : 'Coupan code does not exists!'})
                }
            }).catch(err => {
                res.json({success : false, error : err})
            })
        }else{
            res.json({success : false, error : 'Coupan code required!'})
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