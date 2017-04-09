import { combineReducers, applyMiddleware, createStore, compose } from 'redux'

import thunk from "redux-thunk";
import promise from "redux-promise";
import { createLogger } from "redux-logger";
import devTools from 'remote-redux-devtools';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

let middleware = [thunk, promise];

if(isDebuggingInChrome) {
  middleware.push(createLogger());
}

export function getStore(reducers, intialState) {
  const reducer = combineReducers(reducers);

  return createStore(reducer, intialState, compose(
    applyMiddleware(...middleware),
    devTools()
  ));
}
