import React from 'react';
import { observer } from 'mobx-react';
import { MobxContext } from '@/store';
import Router from '../router';

/**
 * Mobx data flow demo.
 */
export default observer(function () {
  const store = React.useContext(MobxContext);

  return (
    <React.Fragment>
      <input onChange={(event) => { store.app.changeUserName(event.target.value) }} />
      <div>{store.app.user.name}</div>
      <Router />
    </React.Fragment>
  );
})