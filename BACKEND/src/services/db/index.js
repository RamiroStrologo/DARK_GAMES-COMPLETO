const mongoose = require('mongoose');
const envVars = require('../../config/enviromentVar.config');

module.exports = {
  connect: () => {
    return mongoose
      .connect(envVars.string_con)
      .then(() => {
        console.log('bd connected');
      })
      .catch((err) => {
        console.log('bd connection failed', err);
      });
  },
};
