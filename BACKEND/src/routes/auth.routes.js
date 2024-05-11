const { Router } = require('express');
const route = Router();
const passport = require('passport');
const { register, login, logout } = require('../controllers/auth.controllers');

route.post(
  '/register',
  passport.authenticate('register', { session: false }),
  register
);

route.post('/login', passport.authenticate('login', { session: false }), login);
module.exports = route;

route.get('/token', passport.authenticate('jwt', { session: false }));
