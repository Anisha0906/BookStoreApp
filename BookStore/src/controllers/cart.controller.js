import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const AddtoCart = async (req, res, next) => {
  try {
    const data = await CartService.AddtoCart(req.body,req.params._id);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'book added to Cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
        });
        }
    };
     /**
 * Controller to remove from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeFromCart = async (req, res, next) => {
  try {
    const data = await CartService.removeFromCart(req.body, req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'book removed from cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
}; 