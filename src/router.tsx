import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const List = lazy(() => import('./pages/List'));
const Detail = lazy(() => import('./pages/Detail'));

export default function () {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={List} />
        <Route exact path="/detail" component={Detail} />
      </Suspense>
    </Router>
  );
}