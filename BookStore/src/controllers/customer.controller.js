import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customer.service';

/**
 * Controller to create a new wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const AddCustomerAddress = async (req, res, next) => {
  try {
    const data = await CustomerService.AddCustomerAddress(req.body,req.params._id);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'customer address added successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
        });
        }
    };