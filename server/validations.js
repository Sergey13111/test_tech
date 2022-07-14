import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Invalid mail format').isEmail(),
  body('password', 'Password must be at least 3 characters').isLength({ min: 3 }),
];

export const registerValidation = [
  body('email', 'Invalid mail format').isEmail(),
  body('password', 'Password must be at least 3 characters').isLength({ min: 3 }),

];

