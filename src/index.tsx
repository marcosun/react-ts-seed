import React from 'react';
import ReactDOM from 'react-dom';
import { enableLogging } from 'mobx-logger';
import App from './App';

enableLogging();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);