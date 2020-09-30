import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../src/client/reducers';

/**
 * Function to get full attribute name
 * @function getTestAtrributeName
 * @param {String} attr - Test attribute name
 * @returns {DOMElement} HTML DOM Element
 */
export const getTestAtrributeName = attr => (`[data-test="${attr}"]`);

/**
 * Function to check a React element's props
 * @function checkProps
 * @param {ReactElement} component - React Element whose props are to be checked
 * @param {Object} conformingProps - Props against which checking has to be done
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(propError).toBeUndefined();
};

/**
 * Function to get a new copy of the app store
 * @function storeFactory
 * @param {Object} initialState - Initiatl state of the app
 * @returns Copy of the app store
 */
export const storeFactory = (initialState) => {
  const middlewares = [thunk];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducers, initialState);
};
