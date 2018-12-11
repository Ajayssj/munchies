
const db = require('../../database');
const Order = db.getCollection('orders');

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
}