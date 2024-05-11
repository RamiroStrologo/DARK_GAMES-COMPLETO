const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const envVars = require('../config/enviromentVar.config');
const userManager = require('../services/managers/users.manager');
const um = new userManager();

const initializePassport = () => {
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
        secretOrKey: envVars.secret_key,
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
module.exports = { initializePassport };
