const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

module.exports = {
  port: process.env.PORT,
  string_con: process.env.STRING_CONNECTION,
  secret_key: process.env.SECRET_KEY,
};
