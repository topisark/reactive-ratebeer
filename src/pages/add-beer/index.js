import React from 'react';
import { Button, TextField } from 'material-ui';
import './add-beer.scss';

// TODO: Array of fields and map them instead of so much repetition?
export default class AddBeerPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="add-beer">
        <h1>Add a beer!</h1>
        <div className="add-beer-fields">
          <div className="add-beer-fields-input">
            <TextField onChange={this.handleChange} name="name" label="Name" />
          </div>
          <div className="add-beer-fields-input">
            <TextField onChange={this.handleChange} name="brewery" label="Brewery" />
          </div>
          <div className="add-beer-fields-input">
            <TextField onChange={this.handleChange} multiline name="description" label="Description" />
          </div>
        </div>
        <Button raised color="primary">Submit the beer!</Button>
      </div>
    );
  }
}
