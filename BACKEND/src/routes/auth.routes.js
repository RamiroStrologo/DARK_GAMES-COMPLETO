import { Router } from 'express';
import passport from 'passport';
import { register, login } from '../controllers/auth.controllers.js';

const route = Router();

route.post(
  '/register',
  passport.authenticate('register', { session: false }),
  register
);

route.post('/login', passport.authenticate('login', { session: false }), login);

route.get('/token', passport.authenticate('jwt', { session: false }));

export default route;
