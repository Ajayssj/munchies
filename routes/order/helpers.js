
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Order = db.getCollection('orders');
const ActivePlan = db.getCollection('activePlans');
const User = db.getCollection('user');
const PlansExtended = db.getCollection('plansExtended');
const Extra = db.getCollection('extraInfo');
const Plan = db.getCollection('plans');
const isValidCoupan = require('../coupan/helpers').isValidCoupan;
const env = require('../../config/env');
const utils = require('../../utils');
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
        let skippedWeeks = order.plans.skipedWeeks.length;
        let weekObj = getNextWeekId((nextWeek > skippedWeeks)  ? (nextWeek - skippedWeeks) : nextWeek,order.weekIds);
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
const getAdminEmails = (cb) => {
    User.find({ role : 2}).toArray().then(users => {
        cb({success : true, users : users })
    }).catch(err => {cb({success : false, error : err})});
}
const parseExtraInfo = (extraInfo) => {
    let info  = { a : [],b : [],c  : []}
    extraInfo.forEach(obj => {
        switch(obj.type){
            case "allergic":
                info.a.push(obj.value);
                break;
            case "fruits" :
                info.b.push(obj.value);
                break;
            case "green_tea" :
                info.c.push(obj.value);
                break; 
        }
    })
    return info;
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
                let orignalPrice = Number(planInfo.pricePerBag);
                let totalPrice = Number(planInfo.pricePerBag);
                let greenTeaPrice = 0;
                if(extraInfo && Array.isArray(extraInfo) && extraInfo.length){
                   let found = extraInfo.find(item => item.type == "green_tea");
                   if(found && found.value === "Yes") greenTeaPrice = env.GREEN_TEA_PRICE;
                }
                totalPrice += shippingCharge;
                totalPrice += greenTeaPrice;
                coupanDiscount = 0;
                if(coupan && coupan.type == 1) coupanDiscount = getDiscountAmount(coupan.discount,totalPrice).toFixed(2); else if(coupan && coupan.type == 2) coupanDiscount = coupan.discount;
                totalPrice -= coupanDiscount;
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
                    postalCode:orderInfo.postalCode,
                    isAccepted : false,
                }
                if(coupan) orderObj.coupanId = coupan._id;
                Order.insertOne(orderObj).then(order => {
                    let data  = { 
                        order : {
                            firstName : orderObj.customerData.firstName, 
                            lastName : orderObj.customerData.lastName,
                            phoneNo : orderObj.customerData.phoneNo,
                            Area_of_delivery : orderObj.Area_of_delivery,
                            postalCode : orderObj.postalCode,
                            address : orderObj.address,
                            date : moment(orderObj.date).tz('Asia/Calcutta').format("MMMM Do YYYY, h:mm:ss a"),
                            total : orderObj.total,
                            shippingCost : orderObj.shippingCost,
                            greenTeaPrice : greenTeaPrice,
                            coupan : (coupanDiscount)?coupan.code:'',
                            coupanDiscount : ((coupan && coupan.type == 1)?'&#x20b9;':'') + coupanDiscount  + ((coupan && coupan.type == 2)?'%':''),
                            subTotal : orignalPrice
                        },
                        plan : { title : planInfo.title},
                        email : orderInfo.email,
                        type : 4,
                        extraInfo : parseExtraInfo(extraInfo)
                    }

                    getAdminEmails((result) => {
                        if(result.success){
                            result.users.forEach(admin => {
                                data.to = admin.email;
                                console.log('Order Email Sending ... to ' , admin.email);
                                utils.sendOrderEmail(data,(result) => {
                                    if(result.success)
                                        console.log('Order Email Sent Successfully');
                                    else
                                        console.log("Order email sent failed!", result.error)
                                })
                            })
                        }
                    })
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
function findNextWeek(wNo,skipedWeeks){
    let found = skipedWeeks.find(item => item.wNo == wNo);
    if(found)
       return findNextWeek(++wNo,skipedWeeks);
    else
       return wNo;
 }
module.exports = {
    getAllOrders : (req,res) => {
        var pageNo = parseInt(req.query.pageNo)
        var size = parseInt(req.query.size)
        let skip = size * (pageNo - 1)
        let limit = size

        Order.count({},function(err,totalCount){
            if(!err){
                Order.aggregate(
                    [
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
                        {
                            $lookup: {
                                "from" : "activePlans",
                                "localField" : "activePlanId",
                                "foreignField" : "_id",
                                "as" : "planInfo"
                            }
                        },
                        {
                            $unwind: {
                                path : "$user",
                                includeArrayIndex : "arrayIndex", // optional
                                preserveNullAndEmptyArrays : false // optional
                            }
                        },
                        {
                            $unwind: {
                                path : "$planInfo",
                                includeArrayIndex : "arrayIndex", // optional
                                preserveNullAndEmptyArrays : false // optional
                            }
                        },
                        {
                            $sort : {
                                date : -1
                            }
                        },
                        {
                            $skip : skip
                        },
                        {
                            $limit : limit
                        },
                        

                
                    ]
                ).toArray().then(orders => {
                    orders.forEach((order,index) => {
                        order.plans = order.planInfo;
                        // let result = getWeeKState(order);
                        let actweek = getActiveWeek(new Date((moment(moment(order.plans.startDate).tz('Asia/Calcutta').format()))),order.plans.weeks);
                        const label = 'No Next Week';
                        orders[index].label = '';
                        orders[index].nextWeek = (actweek)?((actweek == 10000)?label:actweek + 1):1;
                        if(orders[index].nextWeek > order.plans.weeks) orders[index].nextWeek = label;
                        if(!isNaN(orders[index].nextWeek) && isThisWeekSkip(order.plans.skipedWeeks,orders[index].nextWeek)){
                            orders[index].label = " Skipped ";
                          }
                        
                        if(!isNaN(orders[index].nextWeek)){
                             let skippedWeeks = order.plans.skipedWeeks.length;
                            // if((nextWeek > skippedWeeks)  ? (nextWeek - skippedWeeks) : nextWeek)
                            orders[index].nextWeek = findNextWeek(orders[index].nextWeek,order.plans.skipedWeeks);
                            orders[index].nextWeekId = getNextWeekId(((orders[index].nextWeek > skippedWeeks)?orders[index].nextWeek - skippedWeeks:orders[index].nextWeek),order.weekIds)._id;
                        }
                        delete order.plans;
                        delete orders[index].planInfo.skipedWeeks;
                        // delete orders[index].weekIds;
                    })
                    res.json({success : true, data : {orders, totalCount}})
                }).catch(err => res.json({success : false, error : err}))
            }else{
                res.json({success : false, error : err});
            }
        });
    },
    createOrder : (req,res) => {
        const userId = db.toObjectID(req.session.user._id);
        const planId = req.body.planId;
        const coupanId = req.body.coupanId;
        if(planId && userId){
            let data = {orderInfo : req.body};
            data.orderInfo.userId = userId;
            data.orderInfo.email = req.session.user.email;
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
                
                {
                    $sort : {
                        date : -1
                    }
                }
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
        
    },
    acceptOrder : (req,res) => {
        const orderId = req.params.orderId;
        const state =  req.body.state;

        if(orderId){
            Order.updateOne({_id : db.toObjectID(orderId)},{ $set : { isAccepted : state }})
                .then(result => {
                    if(result.result.nModified == 1)
                        res.json({ success : true})
                    else
                        res.json({ success : false, error : 'Something Went Wrong!'})
                }).catch(err => res.json({ success : false, error : err}));
        }else{
            res.json({success : false, error : 'Invalid Parameters'})
        }
    }   
}