
const db = require('../../database');
const Order = db.getCollection('orders');
const Extra = db.getCollection('extraInfo');
const User = db.getCollection('user');
const request = require('request');

module.exports = {
    getMostUsedPlan : (req,res) => {
        Order.aggregate(

            // Pipeline
            [
                // Stage 1
                {
                    $group: {
                       _id : '$planId',
                        count: {
                                $sum: 1
                            }
                        
                    }
                },
        
                // Stage 2
                {
                    $sort: {
                        count : -1
                    }
                },
        
                // Stage 3
                {
                    $lookup: {
                        "from" : "plans",
                        "localField" : "_id",
                        "foreignField" : "_id",
                        "as" : "planInfo"
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
        
                // Stage 5
                {
                    $project: {
                        "planInfo.adminId" : 0,
                        "arrayIndex" : 0
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray().then(result => {
            res.json({success : true, data : result});
        }).catch(err => res.json({success : false, error : err}));
        
    },
    getDeliveredArea : (req,res) => {
        Order.aggregate(

            // Pipeline
            [
                // Stage 1
                {
                    $group: {
                       _id : '$Area_of_delivery',
                        count: {
                                $sum: 1
                            }
                        
                    }
                },
        
                // Stage 2
                {
                    $sort: {
                        count : -1
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray().then(result => {
            res.json({success : true, data : result});
        }).catch(err => res.json({success : false, error : err}));
        
    },
    getAllergic : (req,res) => {
        Extra.aggregate(

            // Pipeline
            [
                {
                    $match : {
                        type : 'allergic'
                    }
                },
                // Stage 1
                {
                    $group: {
                       _id : '$value',
                        count: {
                                $sum: 1
                            }
                        
                    }
                },
        
                // Stage 2
                {
                    $sort: {
                        count : -1
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray().then(result => {
            res.json({success : true, data : result});
        }).catch(err => res.json({success : false, error : err}));
        
    },
    getGreentea : (req,res) => {
        Extra.aggregate(

            // Pipeline
            [
                {
                    $match : {
                        type : 'green_tea'
                    }
                },
                // Stage 1
                {
                    $group: {
                       _id : '$value',
                        count: {
                                $sum: 1
                            }
                        
                    }
                },
        
                // Stage 2
                {
                    $sort: {
                        count : -1
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray().then(result => {
            res.json({success : true, data : result});
        }).catch(err => res.json({success : false, error : err}));
    },
    getMostLikedFruits : (req,res) => {
        Extra.aggregate(

            // Pipeline
            [
                {
                    $match : {
                        type : 'fruits'
                    }
                },
                // Stage 1
                {
                    $group: {
                       _id : '$value',
                        count: {
                                $sum: 1
                            }
                        
                    }
                },
        
                // Stage 2
                {
                    $sort: {
                        count : -1
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray().then(result => {
            res.json({success : true, data : result});
        }).catch(err => res.json({success : false, error : err}));
        
    },
    getCustomers : (req,res) => {
        Order.aggregate(
            [
                {
                    $group: {
                        _id : null,
                        count : {
                              $sum : 1
                        }
                    }
                },
        
                // Stage 2
                {
                    $project: {
                        _id : 0
                    }
                },
            ]
        ).toArray().then(result => {
            res.json({success : true, data : result[0]})
        }).catch(err => res.json({success : false, error : err}));
        
    },
    getSubscribers : (req,res) =>{
        
        var options = {
            uri:"https://us7.api.mailchimp.com/3.0/lists/91e86cd360",
            method:"GET",
            headers:{
                "content-type": "application/json",
                "Authorization": "any fda839a19d6f99acbb39f849e6f05ed4-us7",
                // user: 'anystring:8d50a55eaf85162d5d167f17c49c02da-us7',
            }
        }
        request(options,function(error,response,body){
            if(error) {
                res.json({
                    isError:true,
                    reason:error,
                })
                return;
            }
            res.json({success : true, data : JSON.parse(body).stats.member_count})
        })   
       /*  .then(result => {
            res.json({success : true, data : result[0]})
        }).catch(err => res.json({success : false, error : err})); */
        
    },
    getTotalOrderValue : (req,res) => {
        Order.find().toArray()
            .then(orders => {
                let totalOrderValue = 0;
                orders.forEach(order => {
                    totalOrderValue += Number(order.total);
                })
                res.json({success : true, data : { totalOrderValue : totalOrderValue}})
            }).catch(err => res.json({ success : false, error : err}))
    }

}