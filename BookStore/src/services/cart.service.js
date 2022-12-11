import Books from '../models/book.model';
import Cart from '../models/cart.model';

//create cart
export const AddtoCart = async (body, book_id) => {
    const data = await Books.findById({ _id: book_id });
    if (data !== null) {
      const cart = await Cart.findOne({ UserID: body.UserID });
      if (cart == null) {
        let book = [];
        data.quantity = 1;
        book.push(data);
        body.books = book;
  
        const cartCreated = await Cart.create({
          UserID: body.UserID,
          books: body.books,
          cart_total: data.price
        });
        return cartCreated;
      }
      else {
        const existingBook = cart.books.find(
          (book) => book._id.toString() === data._id.toString()
        ); 
        console.log('existing', existingBook);
        if (existingBook) {
          cart.books.map((book) => {
            if (book._id.toString() === existingBook._id.toString()) {
              book.quantity += 1;
            }
          });
          cart.cart_total += existingBook.price;
          cart.save();
          return cart;
        }
        else {
          data.quantity = 1;
          cart.books.push(data);
          cart.cart_total += data.price;
          cart.save();
          return cart;
        }
      }
    } else {
      throw new Error('book is not there ,wrong id');
    }
  };