import express from 'express';
import * as cartController from '../controllers/cart.controller';
import  {userAuth}  from '../middlewares/auth.middleware';


const router = express.Router();
//router to create a cart
router.post('/:_id',userAuth, cartController.AddtoCart);

//route to removde from cart
router.put('/remove/:_id', userAuth, cartController.removeFromCart);


export default router;