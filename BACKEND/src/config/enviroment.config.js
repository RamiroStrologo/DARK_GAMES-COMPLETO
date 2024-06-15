import dotenv from 'dotenv';
import path from 'path';
import __dirname from './path.config.js';
import enviroment from './config.js';

dotenv.config({
  path: path.resolve(
    __dirname,
    enviroment === 'dev' ? '../../.env.dev' : '../../.env'
  ),
});

const env = {
  port: process.env.PORT,
  string_con: process.env.STRING_CONNECTION,
  secret_key: process.env.SECRET_KEY,
};

export default env;
