import React from 'react';
import { Button, TextField } from 'material-ui';
import './add-beer.scss';

export default class AddBeerPage extends React.Component {
  render() {
    return (
      <div className="add-beer">
        <h1>Add a beer!</h1>
        <div className="add-beer-fields">
          <div className="add-beer-fields-input">
            <TextField label="Name" />
          </div>
          <div className="add-beer-fields-input">
            <TextField label="Brewery" />
          </div>
          <div className="add-beer-fields-input">
            <TextField multiline label="Description" />
          </div>
        </div>
        <Button raised color="primary">Submit the beer!</Button>
      </div>
    );
  }
}
