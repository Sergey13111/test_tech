import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';

import { registerValidation, loginValidation } from './validations.js';

import { handleValidationErrors, checkAuth } from './utils/index.js';

import { UserController, CompanyController} from './controllers/index.js';

mongoose
  // .connect(process.env.MONGODB_URI)
  .connect('mongodb+srv://login:12345@cluster0.ddjz7w9.mongodb.net/company?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/signup', registerValidation, handleValidationErrors, UserController.register);
app.get('/me', checkAuth, UserController.getMe); 

app.get('/Companies', CompanyController.getAll);
app.get('/Companies/:id', CompanyController.getOne);
app.post('/Companies', checkAuth, handleValidationErrors, CompanyController.create);
// app.patch(
//   '/companies/:id',    
//   checkAuth,
//   handleValidationErrors,
//   CompanyController.update, 
// );

// app.listen(process.env.PORT || 4444, (err) => {
  app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});