import bcrypt from 'bcrypt';
import uuid4 from 'uuid4';

export const createHash = (password) => {
  let pass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return pass;
};
export const isValid = (passwordEntered, passwordDb) => {
  let decrypt = bcrypt.compareSync(passwordEntered, passwordDb);
  return decrypt;
};
export const createCode = (num) => {
  const uuid = uuid4();
  const randomCode = uuid.slice(0, num);
  return randomCode;
};
