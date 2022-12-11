import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

 /**
 * Controller to get all bookes 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
  export const  getAllBookes= async (req, res, next) => {
    try {
      const data = await BookService.getAllBookes();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All bookes fetched successfully'
      });
    } catch (error){
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
        });
        }
    };
    /**
 * Controller to get a book by id
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getBook = async (req, res, next) => {
    try {
      const data = await BookService.getBook(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'book fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
        });
        }
    };