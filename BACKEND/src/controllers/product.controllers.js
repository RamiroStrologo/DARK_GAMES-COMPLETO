const ProductManager = require('../services/managers/products.manager');
const pm = new ProductManager();

const getProducts = async (req, res) => {
  try {
    const { filters } = req.query;
    const response = await pm.getProducts(filters);
    response
      ? res.status(200).send({ msg: 'Productos obtenidos', data: response })
      : res.status(404).send({
          msg: 'No existen productos para los criterios seleccionados',
          data: false,
        });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      msg: 'Error al obtener los productos',
      data: false,
    });
  }
};

//--* CARGA MASIVA DE PRODUCTOS, BORRAR *..\\
const addMany = async (req, res) => {
  const ok = await pm.addMany(req.body);
  if (ok) res.send({ msg: 'ok' });
  else res.send({ msg: 'no ok' });
};
const delMany = async (req, res) => {
  const ok = await pm.delMany();
  if (ok) res.send({ msg: 'ok' });
  else res.send({ msg: 'no ok' });
};
//--*                                     *..\\

module.exports = { addMany, delMany, getProducts };
