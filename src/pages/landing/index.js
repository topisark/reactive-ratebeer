import React from 'react';
import { Paper } from 'material-ui';
import './landing.scss';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Paper className="landing-page-content">
          <h1>Hello!</h1>
          <p>Well, welcome to Ratebeer! I warn you there's not much to see right now, though.</p>
        </Paper>
      </div>
    );
  }
}
