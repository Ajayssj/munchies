
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Order = db.getCollection('orders');
const ActivePlan = db.getCollection('activePlans');
const CustomPlan = db.getCollection('customPlans');
const PlansExtended = db.getCollection('custom')
const getNextMondayDate = function(date){
    return date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
}
const addActivePlan = (obj) => {
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
        customWeeks : [],
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }else{
            const userId = db.toObjectID(req.session.user._id);
            let weeks = req.body.weeks;
            weeks = Number(weeks,10);
            const planId = req.body.planId;
            if(planId && userId && !Number.isNaN(weeks)){
                addActivePlan({userId : userId,planId : planId,numOfWeeks : weeks})
                .then(plan => {
                    const orderObj = {
                        customerData:{
                            firstName :req.body.firstName,
                            lastName : req.body.lastName,
                            phoneNo:req.body.phoneNo,
                        },
                        userId : userId,
                        planId:planId,
                        activePlanId: plan.ops[0]._id,
                        date: new Date(),
                        total:req.body.total,
                        shippingCost:0,
                        Area_of_delivery:req.body.Area_of_delivery,
                        address:req.body.address,
                        postalCode:req.body.postalCode
                    }
                    Order.insertOne(orderObj).then(order => {
                        res.json({success : true, order : order})
                    }).catch(err => {
                        res.json({success : false, error : err});
                    })
                   /*  createWeekByPlans(weeks,db.toObjectID(planId),plan.ops[0]._id)
                        .then(result => {
                            Order.insertOne(orderObj).then(order => {
                                res.json({success : true, order : order})
                            }).catch(err => {
                                res.json({success : false, error : err});
                            })

                        }).catch(err => {
                            res.json({success : false, error : err});
                        }) */
                })
                .catch(err => {
                    res.json({success : false, error : err});
                })
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
                        "localField" : "userId",
                        "foreignField" : "userId",
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
                {
                    $unwind: {
                        path : "$planInfo",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },
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
                         
                    }
                },
            ]
        
        ).toArray()
            .then(order => {
                if(order){
                    console.log("OrderData==>",order);

                        res.json({success : true,orderData:order});
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