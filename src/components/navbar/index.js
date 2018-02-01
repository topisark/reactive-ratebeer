import React from 'react';
import { AppBar, Toolbar, Button } from 'material-ui';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
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

// The empty spans are transformed with CSS into the mobile navigation icon
const MobileNav = props => (
  <div className="navbar-mobile">
    <div id="nav-icon" onClick={props.toggleMobileNav} className={props.mobileNavOpen ? 'nav-icon-open' : undefined}>
      <span />
      <span />
      <span />
      <span />
    </div>
    <CSSTransitionGroup transitionName="collapse" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
      {props.mobileNavOpen &&
        <div className="navbar-mobile-links">
          <NavigationLinks routes={props.routes} />
        </div>
      }
    </CSSTransitionGroup>
  </div>
);

const DesktopNav = props => (
  <div className="navbar-desktop">
    <NavigationLinks routes={props.routes} />
  </div>
);

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { mobileNavOpen: false };
  }

  toggleMobileNav = () => {
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
  };

  render() {
    const { mainRoute, navigationRoutes } = this.props;
    const { mobileNavOpen } = this.state;
    return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <div className="navbar-title" >
            <MainLink {...mainRoute} />
          </div>
          { navigationRoutes &&
            <React.Fragment>
              <DesktopNav routes={navigationRoutes} />
              <MobileNav
                mobileNavOpen={mobileNavOpen}
                routes={navigationRoutes}
                toggleMobileNav={this.toggleMobileNav}
              />
            </React.Fragment>
          }
        </Toolbar>
      </AppBar>
    );
  }
}