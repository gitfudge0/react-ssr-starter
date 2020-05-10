import express from 'express';
import sampleRouter from './sample/sample.routes';

export default () => {
  const router = express.Router();

  router.use('/sample', sampleRouter());

  return router;
};
