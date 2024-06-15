import ProductManager from '../services/managers/products.manager.js';
const pm = new ProductManager();

export const getProducts = async (req, res) => {
  try {
    const plataform = req.query;
    const response = await pm.getProducts(plataform);
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
export const addMany = async (req, res) => {
  const ok = await pm.addMany(req.body);
  if (ok) res.send({ msg: 'ok' });
  else res.send({ msg: 'no ok' });
};
export const delMany = async (req, res) => {
  const ok = await pm.delMany();
  if (ok) res.send({ msg: 'ok' });
  else res.send({ msg: 'no ok' });
};
//--*                                     *..\\
