import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/landing';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}
