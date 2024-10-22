import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Story from '../pages/Story';
import Members from '../pages/Members';
import Projects from '../pages/Projects';
import Contents from '../pages/Contents';

import ScrollToTop from '../components/ScrollToTop';

const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contents" component={Contents} />}
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
