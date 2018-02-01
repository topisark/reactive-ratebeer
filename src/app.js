import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from './components/layout/index';
import LandingPage from './pages/landing';
import BeersPage from './pages/beers';
import RatingsPage from './pages/ratings';
import AddBeerPage from './pages/add-beer';
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
    label: 'Beers',
    path: '/beers',
    component: BeersPage,
    type: RouteType.NAVIGATION_ROUTE
  },
  {
    label: 'Add a beer!',
    path: '/beers/new',
    component: AddBeerPage,
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
    const mainRoute = routes.find(route => route.type === RouteType.MAIN_ROUTE);
    const navigationRoutes = routes.filter(route => route.type === RouteType.NAVIGATION_ROUTE);
    return (
      <div className="application">
        <BrowserRouter>
          <Layout mainRoute={mainRoute} navigationRoutes={navigationRoutes}>
            <Switch>
              {routes.map(route => (
                <Route
                  exact
                  key={route.label}
                  path={route.path}
                  component={route.component}
                />
                )
              )}
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
