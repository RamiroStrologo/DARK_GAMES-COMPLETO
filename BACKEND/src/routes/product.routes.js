import { Router } from 'express';
import {
  addMany,
  delMany,
  getProducts,
} from '../controllers/product.controllers.js';
const route = new Router();

route.get('/', getProducts);
//--* CARGA MASIVA DE PRODUCTOS, BORRAR *..\\
route.post('/addMany', addMany);
route.post('/delMany', delMany);
//--*                                     *..\\

export default route;
