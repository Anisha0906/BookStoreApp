import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const RegisterNewUser = async (req, res, next) => {
  try {
    const data = await UserService.RegisterNewUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
      });
      }
  };
/**
 * Controller to login a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'user login successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
      });
      }
  };

/**
 * Controller for forget password
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const forgetPassword = async (req, res, next) => {
  try {
    const data = await UserService.forgetPassword(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data:data,
      message: 'User reset password'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
      });
      }
  };
/**
 * Controller to reset password
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const NewPassword = async (req, res, next) => {
  try {
    const data = await UserService.NewPassword(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data:data,
      message: 'new password created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
      });
      }
  };