import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux'

import rootReducer from "./store/reducers"
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));
console.log(store.getState())
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

