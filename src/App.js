import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/landing';
import Layout from './components/layout/index';

// TODO: Routes/paths into an array and map navbar and routes from it?
export default class App extends React.Component {
  render() {
    return (
      <div className="application">
        <Switch>
          <Layout>
            <Route path="/" component={LandingPage} />
          </Layout>
        </Switch>
      </div>
    );
  }
}
