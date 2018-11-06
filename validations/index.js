const { check } = require('express-validator/check');
module.exports = {
   user : {
        login : [
            check('email').isEmail().withMessage('Invalid Email Address'),
        ],
        register : [
            check('firstName').isAlpha().withMessage('Invalid FirstName'),
            check('lastName').isAlpha().withMessage('Invalid LastName'),
            check('email').isEmail().withMessage('Invalid Email Address'),
        ],
        resetPassword : [
            check('password').isEmpty().withMessage('Password Is Required')
        ]
   },
   product : {
       addProduct : [
           check('name').isAlphanumeric().withMessage('Invalid Product Name'),
           check('company').isAlpha().withMessage('Invalid Company Name'),
           check('quantity').isNumeric().withMessage('Invalid Quantity'),
           check('price').isNumeric().withMessage('Invalid Price'),
           check('unit').isAlpha().withMessage('Invalid Unit'),
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