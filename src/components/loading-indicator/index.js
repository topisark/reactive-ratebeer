import React from 'react';
import { CircularProgress } from 'material-ui';
import './loading-indicator.scss';

export default class LoadingIndicator extends React.Component {
  render() {
    return (
      <div className="loading-indicator">
        <CircularProgress />
      </div>
    );
  }
}