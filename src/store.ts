import React from 'react';
import app from './App/store';

export const store = {
  app,
};

export const MobxContext = React.createContext(store);