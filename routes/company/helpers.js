
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Company = db.getCollection('companies');


module.exports = {
    addCompany : (req,res) => {
        const company = req.body.company;
        Company.insertOne({company : company})
            .then(result => {
                res.json({success : true, message : 'Company Added Successfully!'})
            }).catch(err => {
                res.json({success : false, error : err})
            })
    },
    getCompany : (req,res) =>{
        const companyId = req.params.companyId;
        Company.findOne({_id : db.toObjectID(companyId)})
            .then(company => {
                if(company)
                    res.json({success : true, data : company.company});
                else
                    res.json({success : false, error : 'Company Not Found!' });
            }).catch(err => {
                res.json({success : false, error : err });
            })
    },
    getCompanies : (req,res) =>{
        Company.find().toArray()
            .then(companies => {
                res.json({success : true, data : companies});
            }).catch(err => {
                res.json({success : false, error : err });
            })
    },
    deleteCompany : (req,res) => {
        const companyId = req.body.companyId;
        Company.findOneAndDelete({_id : db.toObjectID(companyId)})
            .then(company => {
                if(company){
                    res.json({success : true, message : 'Company Deleted Successfully!' });
                }else
                    res.json({success : false, error : 'Company Not Found!' });
            }).catch(err => {
                res.json({success : false, error : err });
            })
    },
    editCompany : (req,res) => {
        const companyId = req.body.companyId;
        const company = req.body.company;
        Company.updateOne({_id : db.toObjectID(companyId)},
        {
            $set : { company : company}
        }).then(company => {
            if(company.result.nModified == 1)
                res.json({success : true, message : 'Company Edited Successfully!'})
            else
                res.json({success : false, error : 'Company Not Found!'})
        }).catch(err => res.json({success : false, error : err}))
    }
}