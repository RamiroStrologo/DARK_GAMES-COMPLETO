import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import config from './enviroment.config.js';
import UserManager from '../services/managers/users.manager.js';

const um = new UserManager();

export const initializePassport = () => {
  //REGISTRO DE USUARIO
  passport.use(
    'register',
    new LocalStrategy(
      { usernameField: 'email', passReqToCallback: true },
      async (req, email, password, done) => {
        try {
          const response = await um.registerUser(req.body);
          if (!response) {
            return done(null, false, { message: 'Error, usuario ya existe' });
          }
          return done(null, response);
        } catch (err) {
          return done('Error al crear el usuario - passport', err);
        }
      }
    )
  );
  passport.use(
    'login',
    new LocalStrategy(
      { usernameField: 'email', passReqToCallback: true },
      async (req, email, password, done) => {
        try {
          const response = await um.loginUser(req.body);
          if (!response) {
            return done(null, false, {
              message: 'Error, usuario y/o contraseña incorrectos',
            });
          }
          return done(null, response);
        } catch (err) {
          return done('Error al iniciar sesión', err);
        }
      }
    )
  );
  //AUTENTICACION JWT
  passport.use(
    'jwt',
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: config.secret_key,
      },
      async (jwt_payload, done) => {
        try {
          console.log(jwt_payload);
          return done(null, jwt_payload);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};

const cookieExtractor = function (req) {
  let token = null;

  if (req && req.cookies) {
    token = req.cookies['cookieToken'];
    console.log('En passport', req.cookies['tokencookie']);
  }
  return token;
};
