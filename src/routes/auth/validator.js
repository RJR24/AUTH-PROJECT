const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
  registerValidator(){
    return [
      check('email')
      .isEmail()
      .withMessage('email is invalid!'),
      check('name')
      .not()
      .isEmpty()
      .withMessage('please enter your name!'),
      check('password')
      .not()
      .isEmpty()
      .withMessage('please enter your password!')
    ]
  } 
  loginValidator(){
    return [
      check('email')
      .isEmail()
      .withMessage('email is invalid!'),
      check('password')
      .not()
      .isEmpty()
      .withMessage('please enter your password!')
    ]
  }
}