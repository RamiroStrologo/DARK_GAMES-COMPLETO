const User = require('../../models/user.model');
const { createHash, isValid } = require('../../utils/crypts.utils');
const CartManager = require('../managers/carts.manager');
// const envVars = require('../../config/enviromentVar.config');
const cm = new CartManager();

class UserManager {
  //REGISTRA AL USUARIO EN LA BD
  async registerUser(userData) {
    try {
      const exist = await this.findUser(userData.email);
      if (!exist) {
        // //FECTH A CART PARA CREAR UN CARRITO Y TARER EL ID (NO FUNCIONA, TRANSFORMA EL OBJECTID EN CADENA)
        // const response = await fetch(
        //   `http://localhost:${envVars.port}/api/carts/newCart`,
        //   {
        //     method: 'POST',
        //   }
        // );
        // if (!response.ok) throw new Error('Failed to create cart');
        // const cartId = await response.json();
        const cart = await cm.addCart();
        userData.cart = cart._id;
        userData.password = createHash(userData.password);
        const register = await User.create(userData);
        return register ? true : false;
      } else return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async loginUser(userData) {
    try {
      const userFound = await this.findUser(userData.email);
      if (userFound) {
        const validPassword = isValid(userData.password, userFound.password);
        if (validPassword) {
          return userFound;
        } else return false;
      } else return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  //BUSCA UN USUARIO EN LA BD (SE PUEDE MEJORAR EL ALGORITMO)
  async findUser(email) {
    try {
      this.users = await User.findOne({ email: `${email}` });
      if (this.users) return this.users;
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = UserManager;
