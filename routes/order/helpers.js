
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Order = db.getCollection('orders');
const ActivePlan = db.getCollection('activePlans');
const CustomPlan = db.getCollection('customPlans');
const PlansExtended = db.getCollection('plansExtended');
const Extra = db.getCollection('extraInfo');
const Plan = db.getCollection('plans');
const isValidCoupan = require('../coupan/helpers').isValidCoupan;
let moment = require('moment-timezone');

const shippingCharges  = {
    'Area of Delivery' : 50,
    'Cantonment' : 50,
    'Domlur' : 50,
    'Indiranagar' : 50,
    'Ulsoor' : 50,
    'Vasanth Nagar' : 50,
    'Koramangala' : 50,
    'Madiwala' : 50,
    'BTM Layout' : 50,
    'Whitefield' : 50,
    'Marathahalli' : 50,
    'CV Raman Naga' : 50
}


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
          if(order.plans.skipedWeeks.find(week => week.wNo == actweek)) actweek += ' (skipped)'
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
const canBeApply = function(coupan,callback){
        Order.aggregate(
            [
                {
                    $match : {
                        userId :coupan.userId,
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
const getPlanInfo = function(planId){
    return  Plan.findOne({ _id : db.toObjectID(planId)});
}
const getDiscountAmount = function(discount, total){
    return (parseFloat(discount).toFixed(2) / 100) * parseFloat(total).toFixed(2);
}

const  insertOrder = async (obj,callback) => {
    let extraInfo = obj.orderInfo.extraInfo;
    let coupan = obj.coupan;
    let orderInfo = obj.orderInfo;
    if(extraInfo){ 
        try{
            extraInfo = JSON.parse(extraInfo);
        }catch(err){
            console.log('JSON ERROR : ', err);
        }
    }
    let  planInfo;
    try{
        planInfo = await getPlanInfo(orderInfo.planId);
        if(planInfo){
            addActivePlan({userId : orderInfo.userId,planId : orderInfo.planId,numOfWeeks : Number(planInfo.numOfWeeks) })
            .then(plan => {
                let area = (orderInfo.Area_of_delivery)?orderInfo.Area_of_delivery:'';
                const shippingCharge = (shippingCharges[area.trim()])?shippingCharges[area.trim()]:50;                                          
                let totalPrice = Number(planInfo.pricePerBag);
                if(coupan && coupan.type == 1) totalPrice  -= getDiscountAmount(coupan.discount,totalPrice).toFixed(2); else if(coupan && coupan.type == 2) totalPrice  -= coupan.discount;
                const orderObj = {
                    customerData:{
                        firstName :orderInfo.firstName,
                        lastName : orderInfo.lastName,
                        phoneNo:orderInfo.phoneNo,
                    },
                    userId : orderInfo.userId,
                    planId:db.toObjectID(orderInfo.planId),
                    activePlanId: plan.ops[0]._id,
                    date: new Date(moment().tz('Asia/Calcutta').format()),
                    total: totalPrice,
                    shippingCost:shippingCharge,
                    Area_of_delivery:area,
                    address:orderInfo.address,
                    postalCode:orderInfo.postalCode
                }
                if(coupan) orderObj.coupanId = coupan._id;
                Order.insertOne(orderObj).then(order => {
                    if(extraInfo && Array.isArray(extraInfo) && extraInfo.length){
                        insertExtraInfo(order.ops[0]._id,extraInfo)
                        .then(result => {
                            console.log('Extra Info Inserted Successfully!');
                        });
                    }
                    callback({success : true, order : order});
                }).catch(err => {
                    callback({success : false, error : err});
                })
            })
            .catch(err => {
                callback({success : false, error : err});
            })
        }else{
            callback({success : false, error : 'Plan Not Found!'});
        }
    }catch(err){
        callback({success : false, error : err});
    }
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
    createOrder : (req,res) => {
        const userId = db.toObjectID(req.session.user._id);
        const planId = req.body.planId;
        const coupanId = req.body.coupanId;
        if(planId && userId){
            let data = {orderInfo : req.body}
            if(coupanId){
                isValidCoupan(coupanId,function(coupan) {
                    if(coupan.success){
                        coupan.data.userId = userId;
                        canBeApply(coupan.data, function(should){
                            if(should.success){
                                data.coupan = coupan.data;
                                insertOrder(data,(result) =>{
                                    res.json(result);
                                })
                            }else{
                                res.json(should);
                            }
                        })
                    }else{
                        res.json(coupan);
                    }
                })
            }else{
                insertOrder(data,(result) =>{
                    res.json(result);
                })
            }
            
        }else{
            res.json({success : false, error : 'Invalid request Data'});
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
    },
    getOrderSummary : (req,res) => {
        
    }
}