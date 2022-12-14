import Books from '../models/book.model';
import Wishlist from '../models/wishlist.model';

//create cart
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