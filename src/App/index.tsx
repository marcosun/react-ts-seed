import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import Router from '../router';

/**
 * Mobx data flow demo.
 */
export default observer(function () {
  return (
    <React.Fragment>
      <input onChange={(event) => { store.changeUserName(event.target.value) }} />
      <div>{store.user.name}</div>
      <Router />
    </React.Fragment>
  );
})