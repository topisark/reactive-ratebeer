import React from 'react';
import { Paper } from 'material-ui';
import './landing.scss';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Paper className="landing-page-content">
          <h1>Hello!</h1>
          <p>
            Welcome to Ratebeer! There's not much to see right now. You can't actually even rate a beer yet.
            Sorry about that. But maybe try adding some beers.
          </p>
        </Paper>
      </div>
    );
  }
}
