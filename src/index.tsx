import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';
import { MobxContext, store } from './store';
import App from './App';

configure({
  enforceActions: 'observed',
});

enableLogging();

ReactDOM.render(
  <MobxContext.Provider value={store}>
    <App />
  </MobxContext.Provider>,
  document.getElementById('app')
);