import books from '../models/book.model';

//get all bookes
export const getAllBookes = async () => {
    const data = await books.find();
    return data;
};

//get a book by id
export const getBook = async (_id) => {
    const data = await books.findById(_id);
    return data;
  };