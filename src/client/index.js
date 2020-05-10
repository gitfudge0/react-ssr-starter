import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './Routes';
import './index.scss';


const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>{ renderRoutes(Routes) }</Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
