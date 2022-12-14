import express from 'express';
import * as cartController from '../controllers/wishlist.controller';
import  {userAuth}  from '../middlewares/auth.middleware';


const router = express.Router();
//router to create a cart
router.post('/:_id',userAuth, cartController.AddtoWishlist);

export default router;