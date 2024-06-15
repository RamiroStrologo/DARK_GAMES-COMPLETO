import CartManager from '../services/managers/carts.manager.js';
const cm = new CartManager();

export const newCart = async (req, res) => {
  try {
    const cartId = await cm.addCart();
    res.status(201).json({ data: cartId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'error al crear el carrito', data: false });
  }
};

export const addProdToCart = async (req, res) => {
  try {
    let cId = req.params.cId;
    let pId = req.params.pId;
    let response = await cm.addProdToCart(cId, pId);
    if (response) {
      res.status(201).send({
        msg: `Producto agregado con éxito al carrito`,
      });
    } else {
      res.status(404).send({
        msg: `Carrito ${cId} no encontrado`,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
