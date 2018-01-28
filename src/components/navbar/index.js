import React from 'react';
import { AppBar, Toolbar, Button } from 'material-ui';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavigationLinks = props => props.routes.map(route => (
  <Link to={route.path} key={route.label}>
    <Button color="inherit">{route.label}</Button>
  </Link>
));

export default class Navbar extends React.Component {
  render() {
    const { routes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <div className="navbar-title" >
            <Link to="/">
              <Button color="inherit">Ratebeer</Button>
            </Link>
          </div>
          { routes &&
            <div className="navbar-links">
              <NavigationLinks routes={routes} />
            </div>
          }
        </Toolbar>
      </AppBar>
    );
  }
}