import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import mlabObj from './auth/authTokens.js';
import routes from './routes';

mongoose.connect(`mongodb://${mlabObj.owner}:${mlabObj.password}@ds139761.mlab.com:39761/mb-node`, () => {
  console.log('connected to mongodb...');
});

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

export default app;
