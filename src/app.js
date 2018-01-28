import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from './components/layout/index';
import LandingPage from './pages/landing';
import BreweriesPage from './pages/breweries';
import BeersPage from './pages/beers';
import RatingsPage from './pages/ratings';
import { RouteType } from './constants';
import './common.scss';

const routes = [
  {
    label: 'Ratebeer',
    path: '/',
    component: LandingPage,
    type: RouteType.MAIN_ROUTE
  },
  {
    label: 'Breweries',
    path: '/breweries',
    component: BreweriesPage,
    type: RouteType.NAVIGATION_ROUTE
  },
  {
    label: 'Beers',
    path: '/beers',
    component: BeersPage,
    type: RouteType.NAVIGATION_ROUTE
  },
  {
    label: 'Ratings',
    path: '/ratings',
    component: RatingsPage,
    type: RouteType.NAVIGATION_ROUTE
  }
];

export default class App extends React.Component {
  render() {
    const mainRoute = routes.find(route => route.type === 'main');
    const navigationRoutes = routes.filter(route => route.type === 'nav');
    return (
      <div className="application">
        <BrowserRouter>
          <Layout mainRoute={mainRoute} navigationRoutes={navigationRoutes}>
            <Switch>
              {routes.map(route =>
                <Route exact key={route.label} path={route.path} component={route.component} />
              )}
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
