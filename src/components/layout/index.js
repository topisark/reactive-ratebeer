import React from 'react';
import Navbar from '../navbar/index';
import './layout.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <div className="layout-content">
          { this.props.children }
        </div>
      </React.Fragment>
    );
  }
}