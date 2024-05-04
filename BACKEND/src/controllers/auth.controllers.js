const { tokenGenerator } = require('../utils/tokenGenerator.utils');

const register = async (req, res) => {};

//GENERA UN JWT TOKEN Y LO GUARDA EN UNA COOKIE
const login = async (req, res) => {
  const token = tokenGenerator(req.user);
  res.cookie('tokencookie', token, { httpOnly: false }).send({ token: token });
};

module.exports = { register, login };
