const express = require('express');
const app = express();
const { initializePassport } = require('./src/config/passport');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const authRoutes = require('./src/routes/auth.routes');
const sessionRoutes = require('./src/routes/session.routes');
const envVars = require('./src/config/enviromentVar');
const cors = require('cors');
const { corsOptions } = require('./src/config/cors');

app.use(cors(corsOptions));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/session', sessionRoutes);

app.listen(envVars.PORT, (req, res) => {
  console.log(`server run OK on port ${envVars.PORT}`);
});
