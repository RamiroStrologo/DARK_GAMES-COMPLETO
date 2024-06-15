import jwt from 'jsonwebtoken';
import env from '../config/enviroment.config.js';
export const tokenGenerator = (userData) => {
  const payload = {
    id: userData._id.toString(),
    email: userData.email,
    name: userData.name,
    lastname: userData.lastname,
    role: userData.role,
    cart: userData.cart._id.toString(),
  };
  let token = jwt.sign(payload, env.secret_key, { expiresIn: '24h' });
  return token;
};
