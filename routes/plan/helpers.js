
const { validationResult } = require('express-validator/check');
const env = require('../../config/env');
const db = require('../../database');
const Plan = db.getCollection('plans');
const ActivePlan = db.getCollection('activePlans');
const CustomPlan = db.getCollection('customPlans');
const PlansExtended = db.getCollection('plansExtended');
const utils = require('../../utils');
const User = db.getCollection('user');
let moment = require('moment-timezone');
const getAdminEmails = (cb) => {
    User.find({ role : 2}).toArray().then(users => {
        cb({success : true, users : users })
    }).catch(err => {cb({success : false, error : err})});
}
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
/* const getActiveWeek = (startDate,endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
   return Math.ceil(Math.abs(Math.floor(( start - end ) / 86400000)) / 7);
} */
const extendOneWeek = (date) => {
    return date.setDate(date.getDate() + 7);
}
const activateDeactivatePlan = (activePlanId,status = true) => {
   return new Promise((success, error) =>  {
    ActivePlan.updateOne({_id : db.toObjectID(activePlanId)},{$set : { isActive : status}}).then(success).catch(error)
   })
}
/* const getCoreDate = function(date){
date = new Date(date);
   return new Date(date.toLocaleDateString()).getTime()
} */
const getCoreDate = (date) => {
    // return (new Date(new Date(new Date( new Date(date).setHours(0)).setMinutes(0)).setSeconds(0)))
    return new Date(date.toLocaleDateString());
  }
const getLastWeekDate = function(startDate,numOfWeeks){
    return startDate.setDate(startDate.getDate() + (numOfWeeks * 7));
}
const isThisWeekSkip = (skipWeeks,wNo) => {
    return skipWeeks.find(item => item.wNo == wNo);
  }
const notLastWeek = (weekNo,maxWeek) =>{
    return (maxWeek >= weekNo )
  }
const getNextWeekId = (weekNo,weekArray) => {
    return weekArray.find(item => item.week == weekNo);
  }
const getActiveWeek = (startDate,lastWeek = 1500) => {
    let start = new Date(startDate);
    let today = new Date(moment(moment.tz('Asia/Calcutta').format()));
    if(getCoreDate(today).getTime() >= getCoreDate(start).getTime() && getCoreDate(today).getTime() <= getCoreDate(new Date(getLastWeekDate(new Date(start),lastWeek))).getTime())
      return Math.ceil(Math.abs(Math.floor(( start - today ) / 86400000)) / 7);
    else if(getCoreDate(today).getTime() > getCoreDate(new Date(getLastWeekDate(new Date(start),lastWeek))).getTime() )
      return 10000; 
    else
      return 0;
  }
const verifySkipWeek = function(plan){
    let actweek;
    let currentDate = getCoreDate(new Date(moment(moment.tz('Asia/Calcutta').format())));
    let startDate =  getCoreDate(new Date(moment(moment(plan.startDate).tz('Asia/Calcutta').format())));
    // currentDate = moment(moment.tz('Asia/Calcutta').format()).add('days', 2).startOf('day').format();

    if(currentDate.getTime() >= startDate.getTime()){
      actweek = getActiveWeek(new Date((moment(moment(plan.startDate).tz('Asia/Calcutta').format()))),plan.weeks);
      let nextWeek = actweek + 1;
      if(notLastWeek(nextWeek,plan.weeks)){
        let weekObj = getNextWeekId(nextWeek - plan.skipedWeeks.length,plan.weekIds);
        if(weekObj){
          if(!isThisWeekSkip(plan.skipedWeeks,nextWeek)){
              weekObj.week = nextWeek;
            return {success : true, data : weekObj};  
          }else{
            return {success : false, error : 'Skipped'};
          }
        }else{
          return {success : false, error : 'Not Found'};
        }
      }else{
        return {success : false, error : 'No Next Week'};
      }
    }else if(plan.skipedWeeks.length){
        return {success : false, error : 'Skipped'};
    }else{
        let weekObj = getNextWeekId(1,plan.weekIds);
      return {success : true, data : weekObj};
    }
        
}
const shouldWeekSkip = function(activePlanId,userId,cb){
     ActivePlan.findOne({_id : db.toObjectID(activePlanId), userId : db.toObjectID(userId)})   
        .then( async (plan) => {
            if(plan){
                plan.weekIds = await PlansExtended.find({planId : db.toObjectID(plan.planId)}).toArray();
                let result = verifySkipWeek(plan);    
                if(result.success){
                    let week = result.data.week;
                    currentDate = moment(moment.tz('Asia/Calcutta').format()).add('days', 2).startOf('day').format();
                    weekDate = moment(moment(plan.startDate).tz('Asia/Calcutta').format()).add('days',7 * (week - 1)).startOf('day').format();
                    if(getCoreDate(new Date(weekDate)).getTime() > getCoreDate(new Date(currentDate)).getTime())
                        cb(true,result.data);
                    else
                        cb(false,'Less than 2 days , can not be skiped!');
                }else{
                    cb(false,result.error);
                }
                
            }
            
        })
        .catch(err => console.log(err));
}
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

const createWeekByPlans = function(weeks,planId){
    let objArr = [];
    for(var i = 0; i < weeks; i++){
        const obj = {products : [],planId, week : i + 1}
        objArr.push(obj);
    }
    return PlansExtended.insertMany(objArr);
        
}
module.exports = {
   getCustomerInfo : (req,res) => {
     let activePlanId = req.params.activePlanId;
     if(activePlanId){
        ActivePlan.aggregate(

            // Pipeline
            [
                // Stage 1
                {
                    $match: {
                        _id : db.toObjectID(activePlanId)
                    }
                },
        
                // Stage 2
                {
                    $lookup: {
                        "from" : "user",
                        "localField" : "userId",
                        "foreignField" : "_id",
                        "as" : "user"
                    }
                },
        
                // Stage 3
                {
                    $lookup: {
                        "from" : "plans",
                        "localField" : "planId",
                        "foreignField" : "_id",
                        "as" : "plan"
                    }
                },
        
                // Stage 4
                {
                    $unwind: {
                        path : "$plan",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
        
                // Stage 5
                {
                    $unwind: {
                        path : "$user",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
        
                // Stage 6
                {
                    $lookup: {
                        "from" : "orders",
                        "localField" : "_id",
                        "foreignField" : "activePlanId",
                        "as" : "order"
                    }
                },
        
                // Stage 7
                {
                    $unwind: {
                        path : "$order",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
        
                // Stage 8
                {
                    $project: {
                        skipedWeeks : 1,
                        "order.address" : 1,
                        "order.postalCode" : 1,
                        "order.Area_of_delivery" : 1,
                        "order.customerData" : 1,
                        "plan.title" : 1,
                        "user.firstName" : 1,
                        "user.lastName" : 1,
                        "user.firstName" : 1,
                        "user.email" : 1,
                        "startDate" : 1,
                        "weeks" : 1
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray().then(info => {
            info[0].currentWeek = getActiveWeek(new Date((moment(moment(info[0].startDate).tz('Asia/Calcutta').format()))),info[0].weeks);           
            info[0].currentWeek = (info[0].currentWeek)?(info[0].currentWeek == 10000)?'Expired':info[0].currentWeek:'Not Started';
            res.json({success : true, data : info});
        }).catch(err => res.json({success : false, error : err}));    
     }else{
        res.json({success : false, error : 'ActivePlan Id is required'});
     }
   },
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
                        res.json({success : false, error : 'No Week Found!'})
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
   // 
   addActivePlan : (req,res) => {
    const planId = req.body.planId;
    const userId = req.body.userId;
    const numOfWeeks = req.body.numOfWeeks;
    if(planId && userId){
        const activePlanObj = { 
            planId : db.toObjectID(planId), 
            userId : db.toObjectID(userId),
            activatedDate : new Date().getTime(),
            startDate : getNextMondayDate(new Date(moment(moment.tz('Asia/Calcutta').format()))),
            isCustom :  false,
            skipedWeeks : [],
            customWeeks : [],
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
    if(userId){
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
    }else{
        res.json({success : false, error : 'UserId is required!'})
    }
   },
   getCustmoizedPlan : (req,res) => {
    const activePlanId = req.params.activePlanId;
    if(activePlanId){
        ActivePlan.aggregate(
            [
                {
                    $match: {
                        _id : db.toObjectID(activePlanId)
                    }
                },
                {
                    $lookup : {
                        "from" : "products",
                        "localField" : "customWeeks.products",
                        "foreignField" : "_id",
                        "as" : "customWeekProducts"
                    }
                },
                {
                    $project : {
                        customWeeks: 0,
                        skipedWeeks : 0
                    }
                },
                {
                    $lookup : {
                        "from" : "plansExtended",
                        "localField" : "planId",
                        "foreignField" : "planId",
                        "as" : "plans"
                    }
                },
                {
                    $lookup : {
                        "from" : "products",
                        "localField" : "plans.products",
                        "foreignField" : "_id",
                        "as" : "defaultWeekProducts"
                    }
                },
                {
                   $project : {
                        plans : 0,
                        customWeeks : 0
                   }
                }
        
            ]).toArray()
                .then(customizedPlan => {
                    res.json({success : true, data : customizedPlan});
                }).catch(err => {
                    res.json({success : false, error : err});
                })
    }else{
        res.json({success : false, data : 'Active Plan Id is required!'});

    }
    
   },
   getCustmoizedPlanByWeek : (req,res) => {
    const activePlanId = req.params.activePlanId;
    const weekId = req.params.weekId;
    if(activePlanId && weekId){
        ActivePlan.aggregate(
            [
                {
                      $match: {
                            _id : db.toObjectID(activePlanId),
                            "customWeeks.wId" :  db.toObjectID(weekId)
                        }
                    },
                    {
                     $project : {
                           plans: {
                            $filter: {
                                   input: "$customWeeks",
                                   as: "product",
                                   cond: { $eq: [ "$$product.wId", db.toObjectID(weekId)] }
                                }
                             }
                          } 
                    },
                    {
                        $lookup : {
                            "from" : "products",
                            "localField" : "plans.products",
                            "foreignField" : "_id",
                            "as" : "products"
                        }
                    },
                    {
                       $project : {
                            plans : 0
                       }
                    }
            ]
        ).toArray()
                .then(customizedPlansProducts => {
                    // let defaultWeekProducts = customizedPlansProducts[0].defaultWeekProducts.filter(item => item._id == db.toObjectID(weekId))
                    // customizedPlansProducts.defaultWeekProducts = defaultWeekProducts;
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
       if(activePlanId){
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
       }else{
            res.json({success : false, error : 'Active Plan Id is required!'});
       }
   },
   activatePlan : (req,res) => {
    const activePlanId = req.params.activePlanId;
    if(activePlanId){
        activateDeactivatePlan(activePlanId)
            .then(updated => {
                if(updated.result.nModified == 1)
                    res.json({success : true, message : 'Active Plan Activated Successfully!'});
                else
                    res.json({success : false, error : 'Active Plan Not Found!'});
            }).catch(err => {
                res.json({result : false, error : err});
            })
    }else{
        res.json({success : false, error : 'Active Plan Id is required!'});
    }
   },
   deletePlan : (req,res) => {
        const activePlanId = req.params.activePlanId;
        if(activePlanId){
            ActivePlan.findOneAndDelete({_id : db.toObjectID(activePlanId)})
            .then(activePlan =>{
                if(activePlan){
                    /* if(activePlan.isCustom)
                        deleteCustomPlans(productId) */
                    res.json({success : true, message : 'Active Plan Deleted Successfully!'});
                }else
                    res.json({success : false, error : 'Active Plan Not Found!'});
            })
        }else{
            res.json({success : false, error : 'Active PlanId required!'});
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
        .then(planInfo => {
            createWeekByPlans(Number(planObj.numOfWeeks),planInfo.ops[0]._id)
                .then(result => {
                    res.json({success : true, message : 'Plan Added Successfully!'});
                }).catch(err => res.json({success : false, error : err}))
           
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
   getCorePlans : (req,res) => {
    //  const adminId = db.toObjectID(req.session.user._id);
     Plan.find().toArray()
        .then(plans => {
            res.json({success : true, data : {plans, greenTeaPrice : env.GREEN_TEA_PRICE},  });
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
            "description" : req.body.description,
            "addWeek" : req.body.addWeek
        }   
        Plan.updateOne({ _id : planId,adminId }, { $set : planObj})
            .then(plan => {
                if(plan.result.nModified == 1){
                    /* createWeekByPlans(Number(planObj.addWeek),planId)
                    .then(result => {
                        ActivePlan.updateOne({planId : planId},{$inc : {weeks : Number(planObj.addWeek)}})
                            .then(plan => {
                                res.json({success : true, message : 'Plan Added Successfully!'});
                            }).catch(err => res.json({success : false, error : err}))
                    }).catch(err => res.json({success : false, error : err})) */
                    
                    res.json({success : true, message : 'Plan Added Successfully!'});
                }
                else
                    res.json({success : false, error : 'Plan not found to be edited!'})
            }).catch(err => res.json({success : false, error : err}));
   },
   skipActivePlanWeek : (req,res) => {
    const activePlanId = req.params.activePlanId;
    const userId = req.session.user._id;
    if(userId && activePlanId){
        shouldWeekSkip(activePlanId,userId,function(result,value){
            if(result){
                let skippedWeek = {wId : db.toObjectID(value._id), wNo : value.week};
                ActivePlan.updateOne({_id : db.toObjectID(activePlanId), userId : db.toObjectID(userId)},
                {
                    $push : {skipedWeeks : skippedWeek },
                    $inc: { weeks : 1}
                }).then(plan => {
                    if(plan.result.nModified == 1){
                        res.json({success : true, message : value.week + ' Week Skipped Successfully!'});   
                        getAdminEmails((result) => {
                            if(result.success){
                                result.users.forEach(admin => {
                                    let nexWeekDate = getNextMondayDate(new Date(moment(moment.tz('Asia/Calcutta').format())))
                                    utils.sendSkippedWeekMail({week : value.week, user : req.session.user, nexWeekDate, admin : admin.email},(result) => {
                                        if(result.result)
                                            console.log( admin.email + ' Skipped Week Mail Sent Successfully!');
                                        else
                                            console.log( admin.email + ' Skipped Week Mail not Sent!');
                                            
                                    });
                                })
                               
                            }
                        })

                    }else
                        res.json({success : false, error : 'Plan not found to be edited!'})
                }).catch(err => res.json({success : false, error : err}));
            }else{
                res.json({success : false, error : value})
            }

        })
       
    }else{
        res.json({success : false, error : 'Invalid Request Data!'})
    }
   },
   skipActivePlanWeek_back : (req,res) => {
    const activePlanId = req.params.activePlanId;
    const userId = req.session.user._id;
    let week = req.params.week;
    const weekId = req.params.weekId;
    week = Number(week,10);
    if(userId && activePlanId && weekId && !Number.isNaN(week)){
        shouldWeekSkip(activePlanId,week,function(result){
            if(result){
                let skippedWeek = {wId : db.toObjectID(weekId), wNo : week};
                ActivePlan.updateOne({_id : db.toObjectID(activePlanId), userId : db.toObjectID(userId)},
                {
                    $push : {skipedWeeks : skippedWeek },
                    $inc: { weeks : 1}
                }).then(plan => {
                    if(plan.result.nModified == 1){
                        res.json({success : true, message : week + ' Week Skipped Successfully!', data : skippedWeek});   
                        getAdminEmails((result) => {
                            if(result.success){
                                result.users.forEach(admin => {
                                    utils.sendSkippedWeekMail({week : week, user : req.session.user, admin : admin.email},(result) => {
                                        if(result.result)
                                            console.log( admin.email + ' Skipped Week Mail Sent Successfully!');
                                        else
                                            console.log( admin.email + ' Skipped Week Mail not Sent!');
                                            
                                    });
                                })
                               
                            }
                        })

                    }else
                        res.json({success : false, error : 'Plan not found to be edited!'})
                }).catch(err => res.json({success : false, error : err}));
            }else{
                res.json({success : false, error : 'Less than 2 days , can not be skiped!'})
            }

        })
       
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