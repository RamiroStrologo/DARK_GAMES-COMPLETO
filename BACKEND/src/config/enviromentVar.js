const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});
let PORT = process.env.PORT;

const envVars = { PORT };

module.exports = envVars;
