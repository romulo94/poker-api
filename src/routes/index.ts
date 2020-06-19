import { Router } from 'express';
import pokerRouter from './poker.routes';

const routes = Router();

routes.use('/poker', pokerRouter);

export default routes;
