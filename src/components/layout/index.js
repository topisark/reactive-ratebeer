import React from 'react';
import Navbar from '../navbar/index';
import './layout.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Navbar {...this.props} />
        <div className="layout-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}