
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Order = db.getCollection('orders');
const ActivePlan = db.getCollection('activePlans');
const CustomPlan = db.getCollection('customPlans');
const PlansExtended = db.getCollection('plansExtended');
const Extra = db.getCollection('extraInfo');
const Plan = db.getCollection('plans');
let moment = require('moment-timezone');

const getNextMondayDate = function(date){
    return date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
}

const getWeekIdsAndProducts = async (planId) => {
     return await PlansExtended.find({planId : db.toObjectID(planId)}).toArray();
}
const getCoreDate = (date) => {
    // return (new Date(new Date(new Date( new Date(date).setHours(0)).setMinutes(0)).setSeconds(0)))
    return new Date(date.toLocaleDateString());
  }
const getLastWeekDate = function(startDate,numOfWeeks){
    return startDate.setDate(startDate.getDate() + (numOfWeeks * 7));
}
const isThisWeekSkip = (skipWeeks,weekNo) => {
    return skipWeeks.find(item => item.wNo == weekNo);
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

const addActivePlan = async (obj) => {
    let plans = await getWeekIdsAndProducts(obj.planId);
     
    let customWeeks = [];
    if(plans && Array.isArray(plans)){
        plans.forEach(plan => {
            customWeeks.push({wId : plan._id,products : plan.products})
        })
    }
    const planId = obj.planId;
    const userId = obj.userId;
    const numOfWeeks = obj.numOfWeeks;
    const activePlanObj = { 
        planId : db.toObjectID(planId), 
        userId : db.toObjectID(userId),
        activatedDate : new Date(),
        startDate : new Date(getNextMondayDate(new Date())),
        isCustom :  false,
        skipedWeeks : [],
        customWeeks : customWeeks,
        weeks : numOfWeeks,
        isActive : true
    }
    return ActivePlan.insertOne(activePlanObj);
   }
const createWeekByPlans = function(weeks,planId,activePlanId){
    let objArr = [];
    for(var i = 0; i < weeks; i++){
        const obj = {products : [],planId, week : i + 1}
        objArr.push(obj);
    }
    return PlansExtended.insertMany(objArr);
        
}
const getWeeKState = (order) => {
    let actweek;
    let currentDate = getCoreDate(new Date(moment(moment.tz('Asia/Calcutta').format())));
    let startDate =  getCoreDate(new Date(moment(moment(order.plans.startDate).tz('Asia/Calcutta').format())));
    // currentDate = moment(moment.tz('Asia/Calcutta').format()).add('days', 2).startOf('day').format();

    if(currentDate.getTime() >= startDate.getTime()){
      actweek = getActiveWeek(new Date((moment(moment(order.plans.startDate).tz('Asia/Calcutta').format()))),order.plans.weeks);
      let nextWeek = actweek + 1;
      if(notLastWeek(nextWeek,order.plans.weeks)){
        let weekObj = getNextWeekId(nextWeek - order.plans.skipedWeeks.length,order.weekIds);
        if(weekObj){
          if(!isThisWeekSkip(order.plans.skipedWeeks,nextWeek)){
            return {state : true ,label :'Skip Next Week', activeWeek : actweek};  
          }else{
            return {state : false ,label : 'Skipped',activeWeek : actweek};
          }
        }else if(nextWeek > order.plans.weeks){
          return {state : false ,label :'No Next Week',activeWeek : actweek};
        }else{
          return {state : false ,label :'No Week Found',activeWeek : actweek};
        }
      }else{
        return {state : false ,label :'No Next Week',activeWeek : actweek};
      }
    }else if(order.plans.skipedWeeks.length){
        return {state : false ,label :'Skipped',activeWeek : actweek};
    }else{
      return {state : true ,label :'Skip 1st Week',activeWeek : actweek};
    }
  }
const insertExtraInfo = function(orderId,data){
    let arrObj = [];
    data.forEach(obj => {
        arrObj.push({ type : obj.type.toLowerCase(), value : obj.value.toLowerCase(), orderId : orderId });
    })
    return Extra.insertMany(arrObj);
    
}

const getPlanInfo = function(planId){
    return  Plan.findOne({ _id : db.toObjectID(planId)});
}
module.exports = {
    getAllOrders : (req,res) => {
        Order.aggregate(

            // Pipeline
            [
                // Stage 1
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
                        "from" : "plansExtended",
                        "localField" : "planId",
                        "foreignField" : "planId",
                        "as" : "weekIds"
                    }
                },
        
                // Stage 2
                {
                    $lookup: {
                        "from" : "activePlans",
                        "localField" : "activePlanId",
                        "foreignField" : "_id",
                        "as" : "planInfo"
                    }
                },
        
                // Stage 3
                {
                    $unwind: {
                        path : "$user",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
        
                // Stage 4
                {
                    $unwind: {
                        path : "$planInfo",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray().then(orders => {
            res.json({success : true, data : orders})
        }).catch(err => res.json({success : false, error : err}))
        
    },
    createOrder : async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }else{
            const userId = db.toObjectID(req.session.user._id);
            let weeks = req.body.weeks;
            weeks = Number(weeks,10);
            const planId = req.body.planId;
            if(planId && userId && !Number.isNaN(weeks)){
                let extraInfo = req.body.extraInfo;
                if(extraInfo){ 
                    try{
                        extraInfo = JSON.parse(extraInfo);
                    }catch(err){
                        console.log('JSON ERROR : ', err);
                    }
                }
                let  planInfo;
                try{
                   planInfo = await getPlanInfo(planId);
                   if(planInfo){
                    addActivePlan({userId : userId,planId : planId,numOfWeeks : planInfo.numOfWeeks })
                    .then(plan => {
                        const orderObj = {
                            customerData:{
                                firstName :req.body.firstName,
                                lastName : req.body.lastName,
                                phoneNo:req.body.phoneNo,
                            },
                            userId : userId,
                            planId:db.toObjectID(planId),
                            activePlanId: plan.ops[0]._id,
                            date: new Date(new Date().toUTCString()),
                            total:Number(planInfo.pricePerBag),
                            shippingCost:0,
                            Area_of_delivery:req.body.Area_of_delivery,
                            address:req.body.address,
                            postalCode:req.body.postalCode
                        }
                        Order.insertOne(orderObj).then(order => {
                            if(extraInfo && Array.isArray(extraInfo) && extraInfo.length){
                                insertExtraInfo(order.ops[0]._id,extraInfo)
                                .then(result => {
                                    console.log('Extra Info Inserted Successfully!');
                                });
                            }
                            res.json({success : true, order : order});
                        }).catch(err => {
                            res.json({success : false, error : err});
                        })
                    })
                    .catch(err => {
                        res.json({success : false, error : err});
                    })
                   }else{
                    res.json({success : false, error : 'Plan Not Found!'});
                   }
                }catch(err){
                    res.json({success : false, error : err});
                }
               
            }else{
                res.json({success : false, error : 'Invalid request Data'});
            }
        }
    },
    getMyorders : (req, res) => {
        const userId = req.session.user._id;
        // const userId = "5bd8445e2ee53b2af4b12107";
        Order.aggregate(
            // Pipeline
            [
                // Stage 1
                {
                    $match: {
                        userId : db.toObjectID(userId)
                    }
                },
                // Stage 2
                {
                    $lookup: {
                        "from" : "plansExtended",
                        "localField" : "planId",
                        "foreignField" : "planId",
                        "as" : "weekIds"
                    }
                },
                // Stage 3
                {
                    $lookup: {
                        "from" : "activePlans",
                        "localField" : "activePlanId",
                        "foreignField" : "_id",
                        "as" : "plans"
                    }
                },
                // Stage 4
                {
                    $lookup: {
                        "from" : "plans",
                        "localField" : "planId",
                        "foreignField" : "_id",
                        "as" : "planInfo"
                    }
                },
                // Stage 5
               /*  {
                    $unwind: {
                        path : "$planInfo",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                }, */
                // Stage 6
                {
                    $unwind: {
                        path : "$plans",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
                // Stage 7
                {
                    $project: {
                        "plans.skipedWeeks" : 1,
                        "plans.startDate" : 1,
                        "plans.activatedDate" : 1,
                        "plans._id" : 1,
                        "plans.weeks" : 1,
                        "address" : 1,
                        "_id" : 1,
                        "userData" : 1,
                        "planInfo.title" : 1,
                        "weekIds.week" : 1,
                        "weekIds._id" : 1,
                        "total" : 1
                         
                    }
                },
            ]
        
        ).toArray()
            .then(orders => {
                if(orders){
                    orders.forEach((order,index) => {
                        let result = getWeeKState(order);
                        orders[index].state = result.state;
                        orders[index].label = result.label;
                        orders[index].activeWeek = (result.activeWeek)?((result.activeWeek == 10000)?'Expired':result.activeWeek):'Not started';
                        delete orders[index].plans.skipedWeeks;
                        delete orders[index].weekIds;
                    })
                     res.json({success : true,orderData: orders});
                }else{
                    res.json({success : false, error : 'customer Id is not found!'});
                }

            }).catch(err => {
                res.json({success : false, error : 'Database Error : ' + err});
            })

    },
    deleteMyorder : (req, res) => {
        const userId = req.session.user._id;
        const orderId = req.body.orderId;
        if(orderId){
            Order.findOneAndDelete({ userId:db.toObjectID(userId), _id: db.toObjectID(orderId)})
                .then(order => {
                    if(order){ 
                        if(order.lastErrorObject.n == 1)
                            res.json({success : true,orderData:order});                    
                        else
                            res.json({success : false,orderData:'Order Not found'});          
                    }else{
                        res.json({success : false, error : 'customer Id or order Id is not found!'});
                    }

                }).catch(err => {
                    res.json({success : false, error : 'Database Error : ' + err});
                })  
        }else{
            res.json({success : false,error : 'Invalid Order Id'});
        }
       
         
    },
    editOrder : (req,res) => {
        const userId = req.session.user._id;
        const orderId = req.body.orderId;
        
        const orderObj = {
            customerData:{
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                phoneNo:req.body.phoneNo,
            },
            userId : userId,
            planId:req.body.planId,
            total:req.body.total,
            shippingCost:0,
            Area_of_delivery:req.body.Area_of_delivery,
            address:req.body.address,
            postalCode:req.body.postalCode
        }
        if(orderId){
            Order.updateOne({ userId:db.toObjectID(userId), _id: db.toObjectID(orderId)}, { $set : orderObj})
            .then(order => {     
                if(order.result.nModified == 1)
                    res.json({success : true, message : 'order Edited Successfully!'})
                else
                    res.json({success : false, error : 'order not found to be edited!'})
            }).catch(err => res.json({success : false, error : err}));
        }else{
            res.json({success : false, error : 'Invalid Order Id!'})
        }
   }
}