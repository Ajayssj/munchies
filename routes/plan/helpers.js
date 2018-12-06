
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Plan = db.getCollection('plans');
const ActivePlan = db.getCollection('activePlans');
const CustomPlan = db.getCollection('customPlans');
const utils = require('../../utils');

const isProductExists = (productId) => {
    return new Promise((success,error) => {
        Product.findOne({_id : db.toObjectID(productId)})
            .then(product => {
                if(product)
                    success({exists : true, product})
                else
                    success({exists : false})
            }).catch(err => {
                error(err);
            })
    })
}
const deleteCustomPlans = (activePlanId) => {
    CustomPlan.findAndDelete({activePlanId : db.toObjectID(activePlanId)})
        .then(deleted => {
            if(deleted.length)
                console.info('Custom Plan Deleted : ');
            else
                console.error('Custom Plan Not Fond : ');
        }).catch(err => {
            console.error(err);
        })
}
const getNextMondayDate = function(date){
    return date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
}
// -- getActiveWeek(startDate,generateLastWeekDate(startDate,numOfWeeks));
const generateLastWeekDate = function(startDate,numOfWeeks){
return startDate.setDate(startDate.getDate() + (numOfWeeks * 7));
}
const getActiveWeek = (startDate,endDate) => {
const start = new Date(startDate);
const end = new Date(endDate);
return Math.ceil(Math.abs(Math.floor(( start - end ) / 86400000)) / 7);
}
const extendOneWeek = (date) => {
return date.setDate(date.getDate() + 7);
}
const activateDeactivatePlan = (activePlanId,status = true) => {
   return new Promise((success, error) =>  {
    ActivePlan.updateOne({_id : db.toObjectID(activePlanId)},{$set : { isActive : status}}).then(success).catch(error)
   })
}
module.exports = {
    addProductInPlan : (req,res)=>{
        /*
            if 'active' found in route then update flag
         */
        const planId = req.params.planId;
        const productId = req.params.productId;
        var planType = 'activePlanId', isCustom = true;
        let week = req.params.week;
        week = Number(week);
        if(planId && productId && !isNaN(week)){
            if(req.originalUrl.indexOf('core') > -1){ planType = 'planId';isCustom = false};
              CustomPlan.updateOne(
                  {[planType] : db.toObjectID(planId), weeks : week},
                  { $push : { products : db.toObjectID(productId)}, $set : { isCustom : isCustom }}
                ).then(plan => {
                    if(plan.result.nModified == 1){
                        res.json({success : true});
                    }else
                        res.json({success : false, error : 'No Plan Found!'})
                }).catch(err => res.json({success : false, error : err}))
        }else
            res.json({success : false, error : 'Invalid Request Paramerts'})
    },
    deleteProductFromPlan : (req,res)=>{
        const planId = req.params.planId;
        const productId = req.params.productId;
        var planType = 'activePlanId', isCustom = true;
        let week = req.params.week;
        week = Number(week);
        if(planId && productId && !isNaN(week)){
            if(req.originalUrl.indexOf('core') > -1){ planType = 'planId';isCustom = false};
                CustomPlan.updateOne(
                {[[planType]] : db.toObjectID(planId),
                    weeks :  week
                },
                {
                    $pull : { 'products' : db.toObjectID(productId)}     
                }).then(plan => {
                    if(plan.modifiedCount >= 1){
                        res.json({success : true});
                    }else
                        res.json({success : false, error : 'No Plan Found!'})
                }).catch(err => res.json({success : false, error : err}))
        }else
            res.json({success : false, error : 'Invalid Request Paramerts'})
    },
    getActivePlans : (req,res) => {
        const userId = req.params.userId;
        if(!userId) userId = req.session.user._id.toString();
        ActivePlan.aggregate(
            [
                {
                    $match: {
                        userId : db.toObjectID(userId)
                    }
                },
                {
                    $lookup: {
                        "from" : "plans",
                        "localField" : "planId",
                        "foreignField" : "_id",
                        "as" : "plans"
                    }
                },
                {
                    $lookup: {
                        "from" : "user",
                        "localField" : "userId",
                        "foreignField" : "_id",
                        "as" : "user"
                    }
                },
                {
                    $unwind: {
                        path : "$plans",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
            ]).toArray().then(activePlans => {
                    res.json({success : true, data : activePlans});
            }).catch(err =>{
                res.json({success : false, error : err });
            })
    },
   getCustmoizedPlan : (req,res) => {
    const activePlanId = req.params.activePlanId;
    CustomPlan.aggregate(
        [
            {
                $match: {
                    activePlanId : db.toObjectID(activePlanId)
                }
            },
            {
                $lookup: {
                    "from" : "products",
                    "localField" : "products",
                    "foreignField" : "_id",
                    "as" : "products"
                }
            },
            {
                $sort: {
                    weeks : 1
                }
            }
    
        ]).toArray()
            .then(customizedPlan => {
                res.json({success : true, data : customizedPlan});
            }).catch(err => {
                res.json({success : false, error : err});
            })
    
   },
   getCustmoizedPlanByWeek : (req,res) => {
    const activePlanId = req.params.activePlanId;
    const week = req.params.week;
    CustomPlan.aggregate(
        [
            {
                $match: {
                    activePlanId : db.toObjectID(activePlanId),
                    weeks : Number(week,10)
                }
            },
            {
                $lookup: {
                    "from" : "products",
                    "localField" : "products",
                    "foreignField" : "_id",
                    "as" : "products"
                }
            }
    
        ]).toArray()
            .then(customizedPlansProducts => {
                console.log('Data : ', customizedPlansProducts);
                res.json({success : true, data : customizedPlansProducts});
            }).catch(err => {
                res.json({success : false, error : err});
            })
   },
   deactivatePlan : (req,res) => {
       const activePlanId = req.params.activePlanId;
       activateDeactivatePlan(activePlanId,false)
        .then(updated => {
            console.log('Then');
            if(updated.result.nModified == 1)
                res.json({success : true, message : 'Active Plan Deactivated Successfully!'});
            else
                res.json({success : false, error : 'Active Plan Not Found!'});
        }).catch(err => {
            res.json({result : false, error : err});
        })
   },
   activatePlan : (req,res) => {
    const activePlanId = req.params.activePlanId;
        activateDeactivatePlan(activePlanId)
        .then(updated => {
            if(updated.result.nModified == 1)
                res.json({success : true, message : 'Active Plan Activated Successfully!'});
            else
                res.json({success : false, error : 'Active Plan Not Found!'});
        }).catch(err => {
            res.json({result : false, error : err});
        })
   },
   deletePlan : (req,res) => {
        const activePlanId = req.params.activePlanId;
        ActivePlan.findOneAndDelete({_id : db.toObjectID(activePlanId)})
            .then(activePlan =>{
                if(activePlan){
                    if(activePlan.isCustom)
                        deleteCustomPlans(productId)
                    res.json({success : true, message : 'Active Plan Deleted Successfully!'});
                }else
                    res.json({success : false, error : 'Active Plan Not Found!'});
            })
   },
   skipActivePlanWeek : (req,res) => {
    const activePlanId = req.params.activePlanId;
    // const userId = req.session.user._id;
    const userId = "5bfbdcc51efad521746223ae";
    let week = req.params.week;
    week = Number(week,10)
    if(userId && activePlanId && !Number.isNaN(week)){
        ActivePlan.updateOne({_id : db.toObjectID(activePlanId), userId : db.toObjectID(userId)},
        {
            $push : {skipedWeeks : week },
            $inc: { weeks : 1}
        }).then(plan => {
            if(plan.result.nModified == 1){
                CustomPlan.updateMany(
                    {activePlanId : db.toObjectID(activePlanId), week : { $gte: week } },
                    {
                    $inc : {week : 1}
                    }).then(result =>{
                        res.json({success : true, message : 'Week Skipped Successfully!'})
                    }).catch(err => res.json({success : false, error : err}))
 
            }else
                res.json({success : false, error : 'Plan not found to be edited!'})
        }).catch(err => res.json({success : false, error : err}));
    }else{
        res.json({success : false, error : 'Invalid Request Data!'})
    }
   },
   addCorePlan : (req,res) => {
    const planObj = {  
        title : req.body.title, 
        pricePerBag : req.body.price, 
        numOfWeeks : req.body.numOfWeeks, 
        description : req.body.description,
        adminId : db.toObjectID(req.session.user._id)
    }
    Plan.insertOne(planObj)
        .then(result => {
            res.json({success : true, message : 'Plan Added Successfully!'});
        }).catch(err => {
            res.json({success : false, error : err});
        })
   },
   getCorePlans : (req,res) => {
     const adminId = db.toObjectID(req.session.user._id);
     Plan.find({ adminId : adminId}).toArray()
        .then(plans => {
            res.json({success : true, data : plans});
        }).catch(err => {
            res.json({success : false, error : err});
        })
   },
   deleteCorePlan : (req,res) => {
        const adminId =  db.toObjectID(req.session.user._id);
        const planId = db.toObjectID(req.body.planId);
        Plan.findOneAndDelete({ _id : planId,adminId : adminId })
            .then(plan => {
                if(plan && plan.value)
                    res.json({success : true, message : 'Plan Deleted Successfully!'})
                else
                    res.json({success : false, error : 'Plan not found to be deleted!'})
            }).catch(err => res.json({success : false, error : err}));
   },
   editCorePlan : (req,res) => {
        const adminId =  db.toObjectID(req.session.user._id);
        const planId = db.toObjectID(req.body.planId);

        const planObj = {  
            "title" : req.body.title, 
            "pricePerBag" : req.body.price, 
            "numOfWeeks" : req.body.numOfWeeks, 
            "description" : req.body.description
        }
        Plan.updateOne({ _id : planId,adminId }, { $set : planObj})
            .then(plan => {
                if(plan.result.nModified == 1)
                    res.json({success : true, message : 'Plan Edited Successfully!'})
                else
                    res.json({success : false, error : 'Plan not found to be edited!'})
            }).catch(err => res.json({success : false, error : err}));
   },
   undoSkippedActivePlanWeek : (req,res) =>{
    const activePlanId = req.params.activePlanId;
    // const userId = req.session.user._id;
    const userId = "5bfbdcc51efad521746223ae";
    let week = req.params.skippedWeek;
    week = Number(week,10);
    console.log('Week Type : ',typeof week);
    if(userId && activePlanId && !Number.isNaN(week)){
        ActivePlan.updateOne({_id : db.toObjectID(activePlanId), userId : db.toObjectID(userId)},
        {
            $pull : { 'skipedWeeks' : week},
            $inc: { weeks : -1}
        }).then(plan => {
            if(plan.result.nModified == 1){
                CustomPlan.updateMany(
                    {activePlanId : db.toObjectID(activePlanId), week : { $gte: week } },
                    {
                    $inc : {week : -1}
                    }).then(result =>{
                        res.json({success : true, message : 'Week Skipped Successfully!'})
                    }).catch(err => res.json({success : false, error : err}))
 
            }else
                res.json({success : false, error : 'Plan not found to be edited!'})
        }).catch(err => res.json({success : false, error : err}));
    }else{
        res.json({success : false, error : 'Invalid Request Data!'})
    }
   }
}