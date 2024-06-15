import mongoose from 'mongoose';
import env from '../../config/enviroment.config.js';

const configDB = {
  connect: () => {
    return mongoose
      .connect(env.string_con)
      .then(() => {
        console.log('bd connected');
      })
      .catch((err) => {
        console.log('bd connection failed', err);
      });
  },
};

export default configDB;
