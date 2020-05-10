import Axios from 'axios';

const env = process.env.NODE_ENV;
let baseURL;

switch (env) {
  case 'development':
  default: {
    baseURL = 'http://localhost:3000/api';
    break;
  }
  case 'staging': {
    baseURL = 'http://localhost:3000/api';
    break;
  }
  case 'production': {
    baseURL = 'http://localhost:3000/api';
    break;
  }
}

export default Axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
