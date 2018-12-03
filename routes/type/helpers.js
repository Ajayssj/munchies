
const { validationResult } = require('express-validator/check');
const db = require('../../database');
const Type = db.getCollection('types');


module.exports = {
    addType: (req, res) => {
        const type = req.body.type;
        const companyId = req.body.companyId;
        Type.insertOne({ type: type, companyId: db.toObjectID(companyId) })
            .then(result => {
                res.json({ success: true, message: 'Type Added Successfully!', data: result })
            }).catch(err => {
                res.json({ success: false, error: err })
            })
    },
    getType: (req, res) => {
        const typeId = req.params.typeId;
        Type.aggregate(
            // Pipeline
            [
                // Stage 1
                {
                    $match: {
                        _id: db.toObjectID(typeId)
                    }
                },

                // Stage 2
                {
                    $lookup: {
                        "from": "companies",
                        "localField": "companyId",
                        "foreignField": "_id",
                        "as": "companies"
                    }
                },

            ]).toArray()
            .then(types => {
                if (types)
                    res.json({ success: true, data: types[0] });
                else
                    res.json({ success: false, error: 'Type Not Found!' });
            }).catch(err => {
                res.json({ success: false, error: err });
            })
    },
    getTypes: (req, res) => {

        Type.aggregate(
            [
                // Stage 1
                {
                    $lookup: {
                        "from": "companies",
                        "localField": "companyId",
                        "foreignField": "_id",
                        "as": "companies"
                    }
                },
            ]).toArray()
            .then(types => {
                res.json({ success: true, data: types });
            }).catch(err => {
                res.json({ success: false, error: err });
            })
    },
    deleteType: (req, res) => {
        const typeId = req.body.typeId;
        Type.findOneAndDelete({ _id: db.toObjectID(typeId) })
            .then(type => {
                if (type) {
                    res.json({ success: true, message: 'Type Deleted Successfully!' });
                } else
                    res.json({ success: false, error: 'Type Not Found!' });
            }).catch(err => {
                res.json({ success: false, error: err });
            })
    },
    editType: (req, res) => {
        const typeId = req.body.typeId;
        const type = req.body.type;
        const companyId = req.body.companyId;
        Type.updateOne({ _id: db.toObjectID(typeId) },
            {
                $set: { type: type, companyId: companyId }
            }).then(type => {
                if (type.result.nModified == 1)
                    res.json({ success: true, message: 'Type Edited Successfully!' })
                else
                    res.json({ success: false, error: 'Type Not Found!' })
            }).catch(err => res.json({ success: false, error: err }))
    }
}