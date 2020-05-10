import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

const sheet = new ServerStyleSheet();

export default (req, store, context) => {
  const content = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Fragment>{ renderRoutes(Routes) }</Fragment>
      </StaticRouter>
    </Provider>,
  ));

  return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
            <title>React SSR Starter</title>
            <link type="text/css" rel="stylesheet" href="/main.css" />
            ${sheet.getStyleTags()}
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `;
};
