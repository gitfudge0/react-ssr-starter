import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';
import apiRouter from './controllers/Routes';

const { SERVER_PORT } = process.env;

const app = express();

app.use('/api', apiRouter());
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path)
    .map(({ route, match }) => (route.loadData ? route.loadData(store, match) : null));

  Promise.all(promises)
    .then(() => {
      const context = {};

      const content = renderer(req, store, context);

      res.send(content);
    });
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
