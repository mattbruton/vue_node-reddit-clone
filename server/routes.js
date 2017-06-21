import express from 'express';

import defaultController from './controllers/defaultController';
import userController from './controllers/userController';

const routes = express();

routes.get('/', defaultController.get);

routes.post('/signup', userController.post);

export default routes;
