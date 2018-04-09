/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import MenuPage from 'containers/MenuPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/menu" />
        <Route path="/menu" component={MenuPage} />
        <Route path="/menu/:id" component={MenuPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
