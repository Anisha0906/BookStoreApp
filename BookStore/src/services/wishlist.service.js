import Books from '../models/book.model';
import Wishlist from '../models/wishlist.model';

//Add to wishlist
export const AddtoWishlist = async (body, book_id) => {
  const checkbook = await Books.findById({ _id: book_id });
  if (checkbook !== null) {
    console.log("book found is",checkbook);
    const wishlist = await Wishlist.findOne({ UserID: body.UserID });      
    if (wishlist !== null) {    
        wishlist.books.push(checkbook);
        wishlist.save();
      return wishlist;
    } else{
       const CreateWishlist = await Wishlist.create({ UserID: body.UserID, books:body.books });
       CreateWishlist.books.push(checkbook);
       CreateWishlist.save()
      return CreateWishlist;
    }
} else {
    throw new Error('book is not available');
  }
};

//Remove from wishlist
export const RemoveFromWishlist = async (body, book_id) => {
  const wishlist = await Wishlist.findOne({ UserID: body.UserID });

  if (wishlist !== null) {
    const ifBookPresent = wishlist.books.find(
      (book) => book._id.toString() === book_id.toString()
    );
    console.log(' remove book if existing', ifBookPresent);
    if (ifBookPresent) {
      wishlist.books.remove(ifBookPresent);
      wishlist.save();
      return wishlist;
    } else {
      throw new Error('book is not in wishlist');
    }
  }
  else {
    throw new Error('wishlist is not created');
  }
};