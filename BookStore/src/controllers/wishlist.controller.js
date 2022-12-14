import HttpStatus from 'http-status-codes';
import * as WishlistService from '../services/wishlist.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const AddtoWishlist = async (req, res, next) => {
  try {
    const data = await WishlistService.AddtoWishlist(req.body,req.params._id);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'book added to wishlist successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
        });
        }
    };