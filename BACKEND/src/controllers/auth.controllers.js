import { tokenGenerator } from '../utils/tokenGenerator.utils.js';

export const register = async (req, res) => {};

//GENERA UN JWT TOKEN Y LO GUARDA EN UNA COOKIE
export const login = async (req, res) => {
  const token = tokenGenerator(req.user);
  res.cookie('tokencookie', token, { httpOnly: true });
  res.send({ token: token });
};
