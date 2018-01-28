import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/landing';
import Navbar from './components/navbar';

// TODO: Routes/paths into an array and map navbar and routes from it?
export default class App extends React.Component {
  render() {
    return (
      <div className="application">
        <Navbar />
        <div className="application-container">
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
