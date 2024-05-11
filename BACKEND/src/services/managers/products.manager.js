const Products = require('../../models/product.model');
const { createCode } = require('../../utils/crypts.utils');

class ProductManager {
  async getProducts(plataform) {
    try {
      let response = await Products.paginate(
        plataform.plataform != 'undefined'
          ? { plataform: plataform.plataform }
          : {},
        { limit: 36 }
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

  //   async delProduct(code) {
  //     try {
  //       const response = await Products.deleteOne({ code: code });
  //       return response.deletedCount > 0 ? true : false;
  //     } catch (err) {
  //       console.error(err);
  //       return false;
  //     }
  //   }
}

module.exports = ProductManager;
