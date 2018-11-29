
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Order = db.getCollection('order');

module.exports = {
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
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
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
    getMyorders: (req, res) => {
        const customerId = db.toObjectID(req.session.user._id);
        var query = {}
        query = {
            'customerData.custId': customerId
        }
        console.log("query==>", query);

        Order.find(query).toArray()
            .then(order => {
                if (order) {
                    console.log("OrderData==>", order);

                    res.json({ success: true, orderData: order });
                } else {
                    res.json({ success: false, error: 'customer Id is not found!' });
                }

            }).catch(err => {
                res.json({ success: false, error: 'Database Error : ' + err });
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