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
    plan : {
      core : {
        add : [
            [
                check('title').custom(customVal),
                check('title').isAlphanumeric().withMessage('contains invalid content!'),
                check('price').custom(customVal),
                check('price').isDecimal().withMessage('contains invalid content !'),
                check('numOfWeeks').custom(customVal),
                check('numOfWeeks').isNumeric().withMessage('should be numeric !'),
            ],
            throwError
      ],
     edit : [
        [
            check('planId').custom(customVal),
            check('planId').isMongoId().withMessage('contains invalid Id!'),
            check('title').custom(customVal),
            check('title').isAlphanumeric().withMessage('contains invalid content!'),
            check('price').custom(customVal),
            check('price').isDecimal().withMessage('contains invalid content !'),
            check('numOfWeeks').custom(customVal),
            check('numOfWeeks').isNumeric().withMessage('should be numeric !'),
        ],
        throwError
     ]
      },
      active : {
        add : [
            [
                check('planId').custom(customVal),
                check('planId').isMongoId().withMessage('contains invalid Id!'),
                check('title').custom(customVal),
                check('title').isAlphanumeric().withMessage('contains invalid content!'),
                check('price').custom(customVal),
                check('price').isDecimal().withMessage('contains invalid content !'),
                check('numOfWeeks').custom(customVal),
                check('numOfWeeks').isNumeric().withMessage('should be numeric !'),
            ],
            throwError
         ]
      }
    },
   coupan : {
        add : [
            [         
                check('type').custom(customVal),
                check('type').isNumeric().withMessage(' value should be numeric!'),
                check('expiry').custom(customVal),      
                check('coupan').custom(customVal),
                check('discount').custom(customVal),
                check('discount').isDecimal().withMessage(' value should be decimal!'),
                check('frequency').custom(customVal),
                check('frequency').isNumeric().withMessage(' value should be numeric!'),
                check('title').custom(customVal),
                check('discount').isAlphanumeric().withMessage(' contain invalid contents!')
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
                // check('firstName').custom(customVal),
                // check('firstName').isAlpha().withMessage('has invalid FirstName'),
                // check('lastName').custom(customVal),
                // check('lastName').isAlpha().withMessage('has invalid lastName'),
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
        ],
        forgotPassword : [
            check('email').custom(customVal),
            check('email').isEmail().withMessage(' has invalid email')
        ],
        changePassword : [
            [
                check('currentPassword').custom(customVal),
                check('newPassword').custom(customVal),
            ],
            throwError
        ],
        profile : [
            [
                // check('firstName').custom(customVal),
                check('phone').isNumeric().withMessage('should contain numeric value!'),
                check('firstName').isAlpha().withMessage('has invalid FirstName'),
                // check('lastName').custom(customVal),
                check('lastName').isAlpha().withMessage('has invalid lastName'),
                // check('email').custom(customVal),
                // check('email').isEmail().withMessage('has invalid email'),
                // check('password').custom(customVal),
            ],
            throwError   
       ],
   },
   
   product : {
       add :[ 
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
        ],
        edit :[ 
            [
             check('productId').custom(customVal),
             check('productId').isMongoId().withMessage('contains invalid Id!'),

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
   order : {
    create :[ 
            [
            check('planId').custom(customVal),
            check('planId').isMongoId().withMessage('contains invalid Id!'),
            check('firstName').custom(customVal),
            check('firstName').isAlpha().withMessage('contains invalid content!'),
            check('lastName').custom(customVal),
            check('lastName').isAlpha().withMessage('contains invalid content!'),
            check('phoneNo').custom(customVal),
            check('phoneNo').isMobilePhone().withMessage('Invalid Phone No'),
            // check('Date').isAfter().withMessage('Invalid Date'),
            check('total').isNumeric().withMessage('Invalid total'),
            // check('Area_of_delivery').isAlpha()().withMessage('Invalid Area Of Delivery'),
            check('address').custom(customVal),
            check('postalCode').custom(customVal),
            check('postalCode').isLength({max : 6}).withMessage(' can not contain more than 6 character!'),
            ],
            throwError
        ],
     delete : [
         [
            check('orderId').custom(customVal),
            check('orderId').isMongoId().withMessage('contains invalid Id!'),
         ],
         throwError
        ],
     edit : [
        [
            check('orderId').custom(customVal),
            check('orderId').isMongoId().withMessage('contains invalid Id!'),
            check('firstName').custom(customVal),
            check('firstName').isAlpha().withMessage('contains invalid content!'),
            check('lastName').custom(customVal),
            check('lastName').isAlpha().withMessage('contains invalid content!'),
            check('phoneNo').custom(customVal),
            check('phoneNo').isMobilePhone().withMessage('Invalid Phone No'),
            // check('Date').isAfter().withMessage('Invalid Date'),
            check('total').isNumeric().withMessage('Invalid total'),
            // check('Area_of_delivery').isAlpha()().withMessage('Invalid Area Of Delivery'),
            check('address').custom(customVal),
            check('postalCode').custom(customVal),
            check('postalCode').isLength({max : 6}).withMessage(' can not contain more than 6 character!'),
            ],
            throwError
     ]
    }


}