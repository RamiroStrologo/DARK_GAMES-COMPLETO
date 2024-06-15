import express from 'express';
import { initializePassport } from './src/config/passport.config.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import authRoutes from './src/routes/auth.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
import productRoutes from './src/routes/product.routes.js';
import env from './src/config/enviroment.config.js';
import cors from 'cors';
import { corsOptions } from './src/config/cors.config.js';
import DataBase from './src/services/db/index.js';
import __dirname from './src/config/path.config.js';
const app = express();

app.use(cors(corsOptions));
app.use(cookieParser(env.secret_key));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
initializePassport();
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/products', productRoutes);

app.listen(env.port, () => {
  console.log(`server run OK on port ${env.port}`);
  DataBase.connect();
});
