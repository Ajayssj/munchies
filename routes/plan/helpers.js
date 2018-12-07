
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Plan = db.getCollection('plans');
const ActivePlan = db.getCollection('activePlans');
const CustomPlan = db.getCollection('customPlans');
const PlansExtended = db.getCollection('plansExtended');
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
const createWeekByPlans = function(weeks,planId){
    let objArr = [];
    for(var i = 0; i < weeks; i++){
        const obj = {products : [],planId, week : i + 1}
        objArr.push(obj);
    }
    return PlansExtended.insertMany(objArr);
        
}
module.exports = {
   addProductInPlan : (req,res)=>{
    const planId = req.params.planId;
    const productId = req.params.productId;
    const weekId = req.params.weekId;
    if(planId && productId && weekId){
        ActivePlan.findOne({_id : db.toObjectID(planId)}, {"customWeeks.wId" : db.toObjectID(weekId)})
            .then(found => {
                if(found && found.customWeeks.length){
                    ActivePlan.updateOne(
                        { _id : db.toObjectID(planId), "customWeeks.wId" : db.toObjectID(weekId)},
                        { $push : { "customWeeks.$.products" :db.toObjectID(productId)}}
                      ).then(plan => {
                          if(plan.result.nModified == 1){
                              res.json({success : true});
                          }else
                              res.json({success : false, error : 'No Plan Found!'})
                      }).catch(err => res.json({success : false, error : err}))
                }else{
                    ActivePlan.updateOne(
                        { _id : db.toObjectID(planId)},
                        { $push : { customWeeks : { wId : db.toObjectID(weekId),products :[db.toObjectID(productId)]}}}
                      ).then(plan => {
                          if(plan.result.nModified == 1){
                              res.json({success : true});
                          }else
                              res.json({success : false, error : 'No Plan Found!'})
                      }).catch(err => res.json({success : false, error : err}))
                }
            }).catch(err => {
                res.json({success : false, error : err})
            })
    }else
        res.json({success : false, error : 'Invalid Request Paramerts'})
   },
   addProductsInCorePlanWeek : (req,res) => {
        const productId = req.params.productId;
        let week = req.params.week;
        week = Number(week);
        if(productId && !isNaN(week)){
            PlansExtended.updateMany(
                { week : week},
                { $push : { products : db.toObjectID(productId)}}
                ).then(plan => {
                    if(plan.result.nModified > 0){
                        res.json({success : true});
                    }else
                        res.json({success : false, error : 'No Plan Found!'})
                }).catch(err => res.json({success : false, error : err}))
        }else
            res.json({success : false, error : 'Invalid Request Paramerts'})
   },
   addProductsInCorePlan : (req,res) =>{
    const planId = req.params.planId;
    const productId = req.params.productId;
    let week = req.params.week;
    week = Number(week);
    if(planId && productId && !isNaN(week)){
          PlansExtended.updateOne(
              { planId : db.toObjectID(planId), week : week},
              { $push : { products : db.toObjectID(productId)}}
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
    let weekId = req.params.weekId;
    if(planId && productId && weekId){
          ActivePlan.updateOne(
            {
                _id : db.toObjectID(planId), 
                "customWeeks.wId" : db.toObjectID(weekId)
            },
            {
             $pull : { 'customWeeks.$.products' : db.toObjectID(productId)} 	
            }).then(plan => {
                if(plan.modifiedCount >= 1){
                    res.json({success : true});
                }else
                    res.json({success : false, error : 'No Plan Found!'})
            }).catch(err => res.json({success : false, error : err}))
    }else
        res.json({success : false, error : 'Invalid Request Paramerts'})
   },
   deleteProductsFromCorePlanWeek : (req,res) => {
    const productId = req.params.productId;
    let week = req.params.week;
    week = Number(week);
    if(productId && !isNaN(week)){
          PlansExtended.updateMany(
            { 
              week :  week
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
   deleteProductFromCorePlan : (req,res) => {
    const planId = req.params.planId;
    const productId = req.params.productId;
    let week = req.params.week;
    week = Number(week);
    if(planId && productId && !isNaN(week)){
        PlansExtended.updateOne(
            { planId : db.toObjectID(planId), 
              week :  week
            },
            {
             $pull : { 'products' : db.toObjectID(productId)} 	
            }).then(plan => {
                if(plan.modifiedCount >= 1){
                    res.json({success : true});
                }else
                    res.json({success : false, error : 'No Plan Found!'})
            }).catch(err => res.json({success : false, error : err}));
    }else
        res.json({success : false, error : 'Invalid Request Paramerts'})
   },
   addActivePlan : (req,res) => {
    const planId = req.body.planId;
    const userId = req.body.userId;
    const numOfWeeks = req.body.numOfWeeks;
    if(planId && userId){
        const activePlanObj = { 
            planId : db.toObjectID(planId), 
            userId : db.toObjectID(userId),
            activatedDate : new Date().getTime(),
            startDate : getNextMondayDate(new Date()),
            isCustom :  false,
            skipedWeeks : [],
            weeks : Number(numOfWeeks),
            isActive : true
        }
        ActivePlan.insertOne(activePlanObj)
            .then(plan => {
                res.json({success : true, message : 'Your Plan Activated Successfully!'})
            }).catch(err => res.json({success : false, error : err}))
    }else{
        res.json({success : false, error : 'Invalid Request Data!'})
    }
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
                    $lookup: {
                        "from" : "order",
                        "localField" : "planId",
                        "foreignField" : "planId",
                        "as" : "order"
                    }
                },
                {
                    $unwind: {
                        path : "$plans",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
                {
                    $project : {
                         "user.password" : 0, 
                         "user.role" : 0
                    }                  
                }
            ]).toArray().then(activePlans => {
                 res.json({success : true, data : activePlans});
            }).catch(err =>{
                res.json({success : false, error : err });
            })
   },
   getCustmoizedPlan : (req,res) => {
    const activePlanId = req.params.activePlanId;
    ActivePlan.aggregate(
        [
            {
                $match: {
                    activePlanId : db.toObjectID(activePlanId)
                }
            },
            {
                "from" : "products",
                "localField" : "customWeeks.products",
                "foreignField" : "_id",
                "as" : "customWeekProducts"
            },
            {
                customWeeks: 0,
                skipedWeeks : 0
            },
            {
                "from" : "plansExtended",
                "localField" : "planId",
                "foreignField" : "planId",
                "as" : "plans"
            },
            {
                "from" : "products",
                "localField" : "plans.products",
                "foreignField" : "_id",
                "as" : "defaultWeekProducts"
            },
            {
                plans : 0,
                customWeeks : 0
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
    const weekId = req.params.weekId;
    if(activePlanId && weekId){
        ActivePlan.aggregate(
            [
                {
                    $match: {
                        activePlanId : db.toObjectID(activePlanId),
                        "customWeeks.wId" :  to.toObjectID(weekId)
                    }
                },
                {
                    "from" : "products",
                    "localField" : "customWeeks.products",
                    "foreignField" : "_id",
                    "as" : "customWeekProducts"
                },
                {
                    customWeeks: 0,
                    skipedWeeks : 0
                },
                {
                    "from" : "plansExtended",
                    "localField" : "planId",
                    "foreignField" : "planId",
                    "as" : "plans"
                },
                {
                    "from" : "products",
                    "localField" : "plans.products",
                    "foreignField" : "_id",
                    "as" : "defaultWeekProducts"
                },
                {
                    plans : 0,
                    customWeeks : 0
                }
        
            ]).toArray()
                .then(customizedPlansProducts => {
                    console.log('Data : ', customizedPlansProducts);
                    res.json({success : true, data : customizedPlansProducts});
                }).catch(err => {
                    res.json({success : false, error : err});
                })
        }else{
            res.json({success : false, error : "Invalid Parameter Data"});
        }
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
   addCorePlan : (req,res) => {
    const planObj = {  
        title : req.body.title, 
        pricePerBag : req.body.price, 
        numOfWeeks : req.body.numOfWeeks, 
        description : req.body.description,
        adminId : db.toObjectID(req.session.user._id)
    }
    Plan.insertOne(planObj)
        .then(planInfo => {
            createWeekByPlans(Number(planObj.numOfWeeks),planInfo.ops[0]._id)
                .then(result => {
                    res.json({success : true, message : 'Plan Added Successfully!'});
                }).catch(err => res.json({success : false, error : err}))
           
        }).catch(err => {
            res.json({success : false, error : err});
        })
   },
   getCorePlans : (req,res) => {
    //  const adminId = db.toObjectID(req.session.user._id);
     Plan.find().toArray()
        .then(plans => {
            res.json({success : true, data : plans});
        }).catch(err => {
            res.json({success : false, error : err});
        })
   },
   getCorePlan : (req,res) => {
    // const adminId = db.toObjectID(req.session.user._id);
    const planId = req.params.planId;
    PlansExtended.find({ planId : db.toObjectID(planId)}).sort({week : 1}).toArray()
       .then(plans => {
            res.json({success : true, data : plans});
       }).catch(err => {
           res.json({success : false, error : err});
       })
  },
  getCorePlanProducts : (req,res) => {
    const planId = req.params.planId;
    let week = req.params.week;
    week = Number(week);
    if(planId && !Number.isNaN(week)){
        PlansExtended.aggregate(
            [
                {
                    $match: {
                        planId : db.toObjectID(planId),
                        week : week
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
            ]
        )
        .toArray().then(plans => {
            res.json({success : true, data : plans});
        }).catch(err => res.json({success : false,error : err}));
        
    }else{
        res.json({success : false,error : 'Invalid PlanId Or Week'})
    }
  },
   deleteCorePlan : (req,res) => {
        // const adminId =  db.toObjectID(req.session.user._id);
        const planId = db.toObjectID(req.body.planId);
        Plan.findOneAndDelete({ _id : planId})
            .then(plan => {
                if(plan && plan.value){   
                    PlansExtended.deleteMany({planId : planId});
                    ActivePlan.updateMany({planId : planId},{$set : {isDeleted : true}});
                    res.json({success : true, message : 'Plan Deleted Successfully!'})
                }
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
   skipActivePlanWeek : (req,res) => {
    const activePlanId = req.params.activePlanId;
    const userId = req.session.user._id;
    let week = req.params.week;
    const weekId = req.params.weekId;
    week = Number(week,10)
    if(userId && activePlanId && weekId && !Number.isNaN(week)){
        ActivePlan.updateOne({_id : db.toObjectID(activePlanId), userId : db.toObjectID(userId)},
        {
            $push : {skipedWeeks : {wId : db.toObjectID(weekId), wNo : week} },
            $inc: { weeks : 1}
        }).then(plan => {
            if(plan.result.nModified == 1){
                res.json({success : true, message : week + ' Week Skipped Successfully!'});   
            }else
                res.json({success : false, error : 'Plan not found to be edited!'})
        }).catch(err => res.json({success : false, error : err}));
    }else{
        res.json({success : false, error : 'Invalid Request Data!'})
    }
   },
   undoSkippedActivePlanWeek : (req,res) =>{
    const activePlanId = req.params.activePlanId;
    const userId = req.session.user._id;
    const weekId = req.params.weekId;
    if(userId && activePlanId && weekId){
        ActivePlan.updateOne({_id : db.toObjectID(activePlanId), userId : db.toObjectID(userId)},
        {
            $pull : { skipedWeeks : { wId : db.toObjectID(weekId)} },
            $inc: { weeks : -1}
        }).then(plan => {
            if(plan.modifiedCount == 1){
                res.json({success : true, message :'Skipped Week Undo Successfully!'});
            }else
                res.json({success : false, error : 'Plan not found to be edited!'})
        }).catch(err => res.json({success : false, error : err}));
    }else{
        res.json({success : false, error : 'Invalid Request Data!'})
    }
   } 
}