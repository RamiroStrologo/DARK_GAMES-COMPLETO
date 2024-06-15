import Products from '../../models/product.model.js';
import { createCode } from '../../utils/crypts.utils.js';

class ProductManager {
  async getProducts(plataform) {
    try {
      let response = await Products.paginate(
        plataform.plataform != 'undefined'
          ? { plataform: plataform.plataform }
          : {},
        { limit: 36, sort: { plataform: 1 } }
      );
      return response;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  //--* CARGA MASIVA DE PRODUCTOS, BORRAR *..\\
  async addMany(data) {
    data.forEach((element) => {
      element.code = createCode(5);
    });
    console.log(data);
    const ok = await Products.insertMany(data);
    return ok;
  }
  async delMany() {
    const ok = await Products.deleteMany();
    return ok;
  }
  //--*                                     *..\\

  async addProduct(newProduct) {
    try {
      newProduct.code = createCode(3).toUpperCase();
      const created = await Products.create(newProduct);
      return created ? true : false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default ProductManager;
