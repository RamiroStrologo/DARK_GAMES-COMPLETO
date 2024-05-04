const { Router } = require('express');
const route = new Router();
const { getSession } = require('../controllers/session.controllers');
const passport = require('passport');

// PASAR LOS DATOS DEL JWT AL FRONT
route.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  getSession
);

module.exports = route;
