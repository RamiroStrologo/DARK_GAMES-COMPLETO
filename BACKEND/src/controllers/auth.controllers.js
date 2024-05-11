const { tokenGenerator } = require('../utils/tokenGenerator.utils');

const register = async (req, res) => {};

//GENERA UN JWT TOKEN Y LO GUARDA EN UNA COOKIE
const login = async (req, res) => {
  const token = tokenGenerator(req.user);
  res.cookie('prueba', 'prueba1');
  res.cookie('tokencookie', token, { httpOnly: false });
  res.send({ token: token });
  console.log('En auth.controller', req.cookies['tokencookie']);
};

module.exports = { register, login };
