import { Router } from 'express';

import HankByHandService from '../services/HankByHandService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { hands } = request.body;

  const hankByHand = new HankByHandService();

  const { hank } = hankByHand.execute({ hands });

  return response.json({ hank });
});

export default usersRouter;
