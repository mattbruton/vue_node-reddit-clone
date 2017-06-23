import express from 'express';

import defaultController from './controllers/defaultController';
import userController from './controllers/userController';
import postController from './controllers/postController';

const routes = express();

// Defaut
routes.get('/', defaultController.get);

// Users
routes.post('/signup', userController.post);

//Posts
routes.get('/post', postController.getAll);
routes.post('/post', postController.post);

export default routes;
