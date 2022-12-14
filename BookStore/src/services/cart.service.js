import Books from '../models/book.model';
import Cart from '../models/cart.model';

//create cart
export const AddtoCart = async (body, book_id) => {
  const data = await Books.findById({ _id: book_id });
  if (data !== null) {
    const cart = await Cart.findOne({ UserID: body.UserID });
    if (cart == null) {
      var book = [];
      data.quantity = 1;
      book.push(data);
      body.books=book

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
        existingBook.quantity += 1;
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
    throw new Error('book is not available');
  }
};

//remove book by quantity from cart
export const removeFromCart = async (body, book_id) => {
  const cart = await Cart.findOne({ UserID: body.UserID });

  if (cart !== null) {
    const ifBookPresent = cart.books.find(
      (book) => book._id.toString() === book_id.toString()
    );

    console.log(' remove book by quantity if existing', ifBookPresent);
    if (ifBookPresent) {
      ifBookPresent.quantity -= 1;
      if (ifBookPresent.quantity == 0) {
        cart.books.remove(ifBookPresent);
        cart.cart_total -=ifBookPresent.price
      }

      cart.cart_total -= (ifBookPresent.price*ifBookPresent.quantity);
      cart.save();
      return cart;
    } else {
      throw new Error('book is not in cart');
    }
  } else {
    throw new Error('cart is not created');
  }
};

//remove book from cart
export const removeBookFromCart = async (body, book_id) => {
  const cart = await Cart.findOne({ UserID: body.UserID });

  if (cart !== null) {
    const ifBookPresent = cart.books.find(
      (book) => book._id.toString() === book_id.toString()
    );
    console.log(' remove book if existing', ifBookPresent);
    if (ifBookPresent) {
      cart.books.remove(ifBookPresent);
      cart.cart_total -= (ifBookPresent.price*ifBookPresent.quantity);
      cart.save();
      return cart;
    } else {
      throw new Error('book is not in cart');
    }
  }
  else {
    throw new Error('cart is not created');
  }
};