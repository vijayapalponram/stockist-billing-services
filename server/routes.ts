import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import shopRouter from './api/controllers/shop/router';
import starWarsRouter from './api/controllers/starwars/router';
import usersRouter from './api/controllers/users/router';
import productsRouter from './api/controllers/products/router';

export default function routes(app: Application): void {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/shop', shopRouter);
  app.use('/api/v1/starwars', starWarsRouter);
  app.use('/api/v1/products', productsRouter);
}

