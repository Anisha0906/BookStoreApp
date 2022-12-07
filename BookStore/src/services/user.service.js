import User from '../models/user.model';
import bcrypt from 'bcrypt';

//register a new user
export const RegisterNewUser = async (body) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashPassword;
  const data = await User.create(body);
  return data;
};
