/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import CounterStore from './src/store';
import App from './src/App';

const rootEl = document.getElementById('root');
const counterStore = new CounterStore();

ReactDOM.render(
  <Provider counterStore={counterStore}>
    <App />
  </Provider>,
  rootEl,
);
