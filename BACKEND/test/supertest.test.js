import { expect } from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';
import env from '../src/config/enviroment.config.js';

const requester = supertest(`http://localhost:${env.port}`);
mongoose.connect(env.string_con);

describe('Test session', () => {
  let cartId;
  it('Crear carrito', async () => {
    const { _body, statusCode } = await requester.post('/api/carts/newCart');
    expect(statusCode).is.eqls(201);
    expect(_body.data._id).to.exist;
    cartId = _body.data._id;
  });
  it('Crear usuario', async () => {
    const newUsr = {
      email: 'ramirostrologo@gmail.com',
      password: '123',
      name: 'Ramiro',
      lastname: 'Strologo',
      cart: cartId,
    };

    const { status } = await requester.post('/api/auth/register').send(newUsr);
    expect(status).is.eqls(200);
  });
  it('Iniciar sesión', async () => {
    const usr = {
      email: 'ramirostrologo@gmail.com',
      password: '123',
    };

    const { status, headers } = await requester
      .post('/api/auth/login')
      .send(usr);
    console.log(headers['set-cookie']);
    expect(status).is.eqls(200);
    expect(headers['set-cookie']).to.exist;
  });
});
