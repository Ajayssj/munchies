const { body, check, validationResult } = require('express-validator/check');

const santizeErrors = (errorsArr) => {
    let errors = '';
    errorsArr.forEach(error => {
        errors += `${error.param} field ${error.msg} \n`;
    }); 
    return errors;
}
const customVal = (value) => {
    if(!value)
        return Promise.reject('is required field!');
    else
        return true;
}
const throwError = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success : false, error : santizeErrors(errors.array())});
    }else
        next()
}
module.exports = {
   coupan : {
        add : [
            [         
                check('expiry').custom(customVal),      
                check('coupan').custom(customVal),
                check('discount').custom(customVal),
                check('discount').isDecimal().withMessage(' value should be decimal!'),
                check('frequency').custom(customVal),
                check('frequency').isNumeric().withMessage(' value should be numeric!'),
                check('title').custom(customVal),
                check('discount').isAlphanumeric().withMessage(' contain invalid contents!'),
            ],
            throwError
        ]
   },
   user : {
        login : [
            [
                check('email').custom(customVal),
                check('email').isEmail().withMessage(' has invalid email'),
                check('password').custom(customVal),
            ],
            throwError
        ],
        register : [
            [
                check('firstName').custom(customVal),
                check('firstName').isAlpha().withMessage('has invalid FirstName'),
                check('lastName').custom(customVal),
                check('lastName').isAlpha().withMessage('has invalid lastName'),
                check('email').custom(customVal),
                check('email').isEmail().withMessage('has invalid email'),
                check('password').custom(customVal),
            ],
            throwError
        ] ,
        resetPassword : [
                [
                    check('token').custom(customVal),
                    check('password').custom(customVal),
                ],
                throwError
            ]
   },
   product : {
       addProduct :[ 
           [
            check('name').custom(customVal),
            check('name').isAlphanumeric().withMessage(' contain invalid value!'),
            check('company').custom(customVal),
            check('company').isAlphanumeric().withMessage(' contain invalid value!'),
            //    check('quantity').isNumeric().withMessage('Invalid Quantity'),
            check('price').custom(customVal),
            check('price').isNumeric().withMessage(' should contain numeric value!'),
            //    check('unit').isAlpha().withMessage('Invalid Unit'),
            ],
            throwError
        ]
   },
//    order : {
//     addOrder : [
//         check('custId').isNumeric().withMessage('Invalid custId'),
//         check('firstName').isAlphanumeric().withMessage('Invalid first Name'),
//         check('lastName').isAlpha().withMessage('Invalid Last Name'),
//         check('phoneNo').isNumeric().withMessage('Invalid Phone No'),
//         check('planId').isNumeric().withMessage('Invalid plan Id'),
//         check('Date').isAfter().withMessage('Invalid Date'),
//         check('total').isNumeric().withMessage('Invalid total'),
//         check('Area_of_delivery').isAlpha()().withMessage('Invalid Area Of Delivery'),
//         check('address').isAlphanumeric()().withMessage('Invalid Area Of Delivery'),
//         check('postalCode').isNumeric()().withMessage('Invalid postalCode'),

//      ]
// }


}