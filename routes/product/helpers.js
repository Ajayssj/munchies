
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Product = db.getCollection('products');
const utils = require('../../utils');

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
    getProducts : (req,res) =>{
        Product.find().toArray()
            .then(products => {
                res.json({success : true, data : products});
            }).catch(err => {
                res.json({success : false, error : err });
            })
    },
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
                unit : req.body.unit,
                company : req.body.company,
                price : req.body.price,
                kcal : req.body.kcal,
                contact : req.body.contact,
                usedInWeeks : req.body.usedInWeeks
            }
            // TODO : Add new product here..
            Product.insertOne(productObj)
                .then(product => {
                    res.json({success : true, message : 'Product Added Successfully!'})
                }).catch(err => {
                    res.json({success : false, error : err})
                })
        }
    },
	getProducts : (req,res) =>{
		Product.find().toArray()
		.then(products => {
		res.json({success : true, data : products});
		}).catch(err => {
		res.json({success : false, error : err });
		})
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
                quantity : req.body.quantity,
                unit : req.body.unit,
                company : req.body.company,
                price : req.body.price,
                kcal : req.body.kcal,
                contact : req.body.contact,
                usedInWeeks : req.body.usedInWeeks
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