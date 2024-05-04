const cartManager = require('../services/managers/carts.manager');
const cm = new cartManager();

const newCart = async (req, res) => {
  try {
    const cartId = await cm.addCart();
    res.status(200).json({ data: cartId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'error al crear el carrito', data: false });
  }
};

module.exports = { newCart };
