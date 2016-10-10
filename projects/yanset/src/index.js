import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './index.css';
import appReducer from './reducers';

let store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
  <App store={store} />
  </Provider>,
  document.getElementById('root')
);
