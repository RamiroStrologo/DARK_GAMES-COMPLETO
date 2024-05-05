const { Router } = require('express');
const route = new Router();
const {
  addMany,
  delMany,
  getProducts,
} = require('../controllers/product.controllers');

route.get('/', getProducts);
//--* CARGA MASIVA DE PRODUCTOS, BORRAR *..\\
route.post('/addMany', addMany);
route.post('/delMany', delMany);
//--*                                     *..\\

module.exports = route;
