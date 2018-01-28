import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from './components/layout/index';
import LandingPage from './pages/landing';
import BreweriesPage from './pages/breweries';
import BeersPage from './pages/beers';
import RatingsPage from './pages/ratings';

const mainRoute = {
  label: 'Ratebeer',
  path: '/',
  component: LandingPage
};

const routes = [
  {
    label: 'Breweries',
    path: '/breweries',
    component: BreweriesPage
  },
  {
    label: 'Beers',
    path: '/beers',
    component: BeersPage
  },
  {
    label: 'Ratings',
    path: '/ratings',
    component: RatingsPage
  }
];

export default class App extends React.Component {
  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <Layout mainRoute={mainRoute} routes={routes}>
            <Switch>
              { [mainRoute, ...routes].map(route =>
                <Route exact key={route.label} path={route.path} component={route.component} />
              )}
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
