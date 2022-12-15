import express from 'express';
import * as customerController from '../controllers/customer.controller';
import  {userAuth}  from '../middlewares/auth.middleware';


const router = express.Router();
//router to create a wishlist
router.post('/add',userAuth, customerController.AddCustomerAddress);

export default router;