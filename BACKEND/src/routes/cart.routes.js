const { Router } = require('express');
const route = new Router();

const { newCart } = require('../controllers/cart.controllers');

route.post('/newCart', newCart);

module.exports = route;
