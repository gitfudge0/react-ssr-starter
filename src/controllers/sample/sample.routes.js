import express from 'express';
import getSample from './getSample';

export default () => {
  const router = express.Router();

  router.get('/', getSample);

  return router;
};
