import express from 'express';
import * as cartController from '../controllers/wishlist.controller';
import  {userAuth}  from '../middlewares/auth.middleware';


const router = express.Router();
//router to create a wishlist
router.post('/:_id',userAuth, cartController.AddtoWishlist);

//router to remove book from wishlist
router.put('/:_id',userAuth, cartController.RemoveFromWishlist);
export default router;