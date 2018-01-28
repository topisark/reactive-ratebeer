import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from './components/layout/index';
import LandingPage from './pages/landing';
import BreweriesPage from './pages/breweries';
import BeersPage from './pages/beers';
import RatingsPage from './pages/ratings';

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


// TODO: Routes/paths into an array and map navbar and routes from it?
export default class App extends React.Component {
  render() {
    return (
      <div className="application">
        <Switch>
          <Layout routes={routes}>
            <Route exact path="/" component={LandingPage} />
            { routes.map(route => <Route key={route.label} path={route.path} component={route.component} />)}
          </Layout>
        </Switch>
      </div>
    );
  }
}
