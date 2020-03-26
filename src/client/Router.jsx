import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Story from '../pages/Story';
import Members from '../pages/Members';
import Projects from '../pages/Projects';
import Contents from '../pages/Contents';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contents" component={Contents} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
