import express from 'express';

import defaultController from './controllers/defaultController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

// Defaut
routes.get('/', defaultController.get);

// Users
routes.post('/signup', userController.post);

//Posts
routes.get('/posts', postController.getAll);
routes.post('/post', postController.post);

//Comments
routes.post('/comment', commentController.post);

export default routes;
