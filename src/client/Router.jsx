import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Index from '../pages/Index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/old" component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
