const jwt = require('jsonwebtoken');
const envVars = require('../config/enviromentVar.config');
const tokenGenerator = (userData) => {
  const payload = {
    id: userData._id.toString(),
    email: userData.email,
    name: userData.name,
    lastname: userData.lastname,
    role: userData.role,
    cart: userData.cart._id.toString(),
  };
  let token = jwt.sign(payload, envVars.secret_key, { expiresIn: '24h' });
  return token;
};
module.exports = { tokenGenerator };
