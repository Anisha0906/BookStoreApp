import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//register a new user
export const RegisterNewUser = async (body) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashPassword;
  const data = await User.create(body);
  return data;
};

//login user
export const login = async (body) => {
  const data = await User.findOne({ email: body.email });
  if (data !== null) {
    const result = await bcrypt.compare(body.password, data.password);
    if (result) { var token = jwt.sign({email: data.email, id: data._id},process.env.SECRET_KEY
      );
      return token;
    } else {
      throw new Error('invalid password');
    }
  } else {
    throw new Error('invalid email');
  }
};

//forget password
export const forgetPassword = async (body) => {
  const data = await User.findOne({ email: body.email });
  if (data !== null) {
  var token = jwt.sign({email: data.email, id: data._id},process.env.SECRET_KEY
      );
    return token;
  } else {
    throw new Error('user not registered');
  }
};
//Reset password
export const NewPassword = async (body) => {
  const saltRounds = 10;
  const newhashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = newhashPassword;
  const data = await User.findOneAndUpdate(
    {email:body.email},
    {password:newhashPassword},
    {
      new: true
    }
  );
  return data;
};