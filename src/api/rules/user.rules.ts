import bcrypt  from 'bcrypt';
import { check } from 'express-validator/check';
import * as service from '../../db/service/usersService';

export const userRules = {
    forRegister: [
        check('password')
            .isLength({ min: 8 }).withMessage('Invalid password'),
        // check('confirmPassword')
        //     .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Password are different')
    ],

    forLogin: [
        check('email')
        .isEmail().withMessage('Invalid email format')
        .custom(email => service.getEmail(email)).withMessage('Invalid email or password'),

        check('password')
        .custom((password, { req }) => {
          return service.checkEmailPassword(req.body.email, password, bcrypt)

        }).withMessage('Invalid email or password')
    ]
}