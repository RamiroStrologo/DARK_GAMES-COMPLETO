const Cart = require('../../models/cart.model');

class CartManager {
  async addCart() {
    try {
      const createdCart = await Cart.create({ products: [] });
      return createdCart;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = CartManager;
