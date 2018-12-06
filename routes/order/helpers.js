
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Order = db.getCollection('order');

module.exports = {
    getAllOrders : (req,res) => {
        Order.aggregate(
 
            // Pipeline
            [
                // Stage 1
                {
                    $lookup: {
                        "from" : "user",
                        "localField" : "customerData.custId",
                        "foreignField" : "_id",
                        "as" : "user"
                    }
                },
 
                // Stage 2
                {
                    $lookup: {
                        "from" : "activePlans",
                        "localField" : "customerData.custId",
                        "foreignField" : "userId",
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
    createOrder: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            var date = Date.now();
            console.log("orderDate==>", date);
            const customerId = db.toObjectID(req.session.user._id);
            const orderObj = {
                customerData: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phoneNo: req.body.phoneNo,
                    custId: customerId
                },
                planId: req.body.planId,
                date: date,
                total: req.body.total,
                shippingCost: 0,
                Area_of_delivery: req.body.Area_of_delivery,
                address: req.body.address,
                postalCode: req.body.postalCode
            }
            Order.insertOne(orderObj).then(order => {
                res.json({ success: true, order: order })
            }).catch(err => {
                res.json({ success: false, error: err });
            })

        }
    },
    getMyorders : (req, res) => {
        // const customerId = req.session.user._id;
        const customerId = "5bfbdcc51efad521746223ae";
        Order.aggregate(

            // Pipeline
            [
                // Stage 1
                {
                    $match: {
                       'customerData.custId' : db.toObjectID(customerId)
                    }
                },

                // Stage 2
                {
                    $lookup: {
                        "from" : "activePlans",
                        "localField" : "planId",
                        "foreignField" : "_id",
                        "as" : "activePlan"
                    }
                },

                // Stage 3
                {
                    $unwind: {
                        path : "$activePlan",
                        includeArrayIndex : "arrayIndex", // optional
                        preserveNullAndEmptyArrays : false // optional
                    }
                },

            ]

            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

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
    deleteMyorder: (req, res) => {
        console.log("Req to delete==>", req.body, req.query);

        const customerId = db.toObjectID(req.session.user._id);
        const orderId = db.toObjectID(req.body.orderId);
        var query = {}
        query = {
            $and: [
                { 'customerData.custId': customerId },
                { _id: orderId }
            ]
        }

        Order.findOneAndDelete(query)
            .then(order => {
                if (order) {
                    if (order.lastErrorObject.n == 1)
                        res.json({ success: true, orderData: order });
                    else
                        res.json({ success: false, orderData: 'Order Not found' });

                } else {
                    res.json({ success: false, error: 'customer Id or order Id is not found!' });
                }

            }).catch(err => {
                res.json({ success: false, error: 'Database Error : ' + err });
            })

    },
    editOrder: (req, res) => {
        const customerId = db.toObjectID(req.session.user._id);
        const orderId = db.toObjectID(req.body.orderId);
        // var date=Date.now();
        // var firstName=(req.body.firstName)
        var query = {}
        query = {
            $and: [
                { 'customerData.custId': customerId },
                { _id: orderId }
            ]
        }

        const orderObj = {
            customerData: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNo: req.body.phoneNo,
                custId: customerId
            },
            planId: req.body.planId,
            // date:date,
            total: req.body.total,
            shippingCost: 0,
            Area_of_delivery: req.body.Area_of_delivery,
            address: req.body.address,
            postalCode: req.body.postalCode
        }

        Order.updateOne(query, { $set: orderObj })
            .then(order => {
                if (order.result.nModified == 1)
                    res.json({ success: true, message: 'order Edited Successfully!' })
                else
                    res.json({ success: false, error: 'order not found to be edited!' })
            }).catch(err => res.json({ success: false, error: err }));
    },
}