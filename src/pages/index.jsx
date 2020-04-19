import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
// import Projects from './Projects';

const Pages = ({ user }) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Me user={user} />
      </Route>
      <Route exact path="/dsouvage-homepage">
        <Me user={user} />
      </Route>
      {/* <Route path="/projects">
        <Projects user={user} />
      </Route> */}
    </Switch>
  </Router>
);

Pages.propTypes = {
  user: PropTypes.any.isRequired,
};

export default Pages;
