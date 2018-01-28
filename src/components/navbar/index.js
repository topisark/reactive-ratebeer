import React from 'react';
import { AppBar, Toolbar, Button } from 'material-ui';
import { Link } from 'react-router-dom';
import './navbar.scss';

const MainLink = props => (
  <Link to={props.path}>
    <Button color="inherit">{props.label}</Button>
  </Link>
);

const NavigationLinks = props => props.routes.map(route => (
  <Link to={route.path} key={route.label}>
    <Button color="inherit">{route.label}</Button>
  </Link>
));

export default class Navbar extends React.Component {
  render() {
    const { mainRoute, navigationRoutes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <div className="navbar-title" >
            <MainLink {...mainRoute} />
          </div>
          { navigationRoutes &&
            <div className="navbar-links">
              <NavigationLinks routes={navigationRoutes} />
            </div>
          }
        </Toolbar>
      </AppBar>
    );
  }
}