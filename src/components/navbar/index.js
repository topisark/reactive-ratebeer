import React from 'react';
import { AppBar, Toolbar, Button } from 'material-ui';
import { Link } from 'react-router-dom';
import './navbar.scss';

// TODO: Real links
export default class Navbar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <div className="navbar-title" >
            <Link to="/">
              <Button color="inherit">Ratebeer</Button>
            </Link>
          </div>
          <div className="navbar-links">
            <Button color="inherit">Foo</Button>
            <Button color="inherit">Bar</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}