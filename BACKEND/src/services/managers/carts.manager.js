import Cart from '../../models/cart.model.js';

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
  async addProdToCart(cId, pId) {
    try {
      const cart = await Cart.findOne({ _id: cId });
      cart.products.push({ product: pId });
      await this.cart.save();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default CartManager;
