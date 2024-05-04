const express = require('express');
const app = express();
const { initializePassport } = require('./src/config/passport.config');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const authRoutes = require('./src/routes/auth.routes');
const sessionRoutes = require('./src/routes/session.routes');
const cartRoutes = require('./src/routes/cart.routes');
const envVars = require('./src/config/enviromentVar.config');
const cors = require('cors');
const { corsOptions } = require('./src/config/cors.config');
const DataBase = require('./src/services/db/index');

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
initializePassport();
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/carts', cartRoutes);

app.listen(envVars.port, (req, res) => {
  console.log(`server run OK on port ${envVars.port}`);
  DataBase.connect();
});
