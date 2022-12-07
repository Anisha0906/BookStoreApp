import express from 'express';
import * as userController from '../controllers/user.controller';
import {NewUserValidator} from '../validators/user.validator';


const router = express.Router();

//route to register a new user
router.post('/register', NewUserValidator, userController.RegisterNewUser);




export default router;
