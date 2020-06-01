import { Router } from 'express';

import toolsRouter from './tools.routes';
import userRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/tools', toolsRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
