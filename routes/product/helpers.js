
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Product = db.getCollection('products');
const utils = require('../../utils');
const companyModule = require('../company/helpers');
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

module.exports = {
    addProduct : (req,res) => {
        const errors = validationResult(req);
        console.log(req.body);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }else{
            var productObj = {
                name : req.body.name,
                type : req.body.type,
                quantity : req.body.quantity,
                company : req.body.company,
                price : req.body.price,
                kcal : req.body.kcal,
                allergyDetails : req.body.allergyDetails,
                cost : req.body.cost
            }
            // TODO : Add new product here..
            Product.insertOne(productObj)
                .then(product => {
                    companyModule.addCompany(productObj.company.trim().toLowerCase());
                    res.json({success : true, message : 'Product Added Successfully!', data : product.ops[0]})
                }).catch(err => {
                    res.json({success : false, error : err})
                })
        }
    },
    getProduct : (req,res) =>{
        const productId = req.params.productId;
        isProductExists(productId)
            .then(product => {
                if(product.exists)
                    res.json({success : true, data : product.product});
                else
                    res.json({success : false, error : 'Product Not Found!' });
            }).catch(err => {
                res.json({success : false, error : err });
            })
    },
    getProducts : (req,res) =>{
        Product.aggregate(
            // Pipeline
            [
                // Stage 1
                {
                    $lookup: {
                        "from" : "plansExtended",
                        "localField" : "_id",
                        "foreignField" : "products",
                        "as" : "weeks"
                    }
                },
        
                // Stage 2
                {
                    $project: {
                        "weeks.products" : 0,
                        "weeks.planId" : 0,
                        "weeks._id" : 0
                    }
                },
        
            ]
        
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
        
        ).toArray()
            .then(products => {
                companyModule.getCompanies().then(companies => {
                    res.json({success : true, data : {products, companies}});
                }).catch(err => res.json({success : false, error : err }));
            }).catch(err => {
                res.json({success : false, error : err });
            })
    },
    deleteProduct : (req,res) => {
        const productId = req.params.productId;
        Product.findOneAndDelete({_id : db.toObjectID(productId)})
            .then(product => {
                if(product){
                    res.json({success : true, message : 'Product Deleted Successfully!' });
                }else
                    res.json({success : false, error : 'Product Not Found!' });
            }).catch(err => {
                res.json({success : false, error : err });
            })
    },
    editProduct : (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }else{
            const productId = req.body.productId;
            const productObj = {
                name : req.body.name,
                type : req.body.type,
                quantity : req.body.quantity,
                company : req.body.company,
                price : req.body.price,
                kcal : req.body.kcal,
                allergyDetails : req.body.allergyDetails,
                cost : req.body.cost
            }
            Product.updateOne({_id : db.toObjectID(productId)},{ $set : productObj})
                .then(result => {
                    res.json({success : true, message : 'Product Updated Successfully!' });
                }).catch(err => {
                    res.json({success : false, error : err });
                })
        }
    }
}