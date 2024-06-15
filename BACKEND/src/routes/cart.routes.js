import { Router } from 'express';
import { newCart, addProdToCart } from '../controllers/cart.controllers.js';
const route = new Router();

route.post('/newCart', newCart);
route.post('/addProdToCart/:cId/:pId', addProdToCart);
export default route;
