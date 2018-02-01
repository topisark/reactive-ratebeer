import React from 'react';
import request from 'request-promise';
import { Button, Dialog, TextField } from 'material-ui';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../constants';
import './add-beer.scss';

function mockPost() {
  return Promise.resolve();
}

const beerProperties = ['Name', 'Berwery', 'Description'];

const SuccessDialog = () => (
  <Dialog open>
    <div className="add-beer-dialog">
      <h1>Beer added, yay!</h1>
      <Link to="/beers">
        <Button>See the beers</Button>
      </Link>
    </div>
  </Dialog>
);

// TODO: Array of fields and map them instead of so much repetition?
// TODO: Validation?
export default class AddBeerPage extends React.Component {
  constructor() {
    super();
    this.state = { dialogOpen: false };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { name, brewery, description } = this.state;
    const requestOptions = {
      url: `${apiUrl}/beers/new`,
      json: true,
      body: {
        name,
        brewery,
        description
      }
    };

    mockPost(requestOptions).then(() => {
      this.setState({ dialogOpen: true });
    });
  };

  render() {
    return (
      <div className="add-beer">
        { this.state.dialogOpen && <SuccessDialog /> }
        <h1>Add a beer!</h1>
        <div className="add-beer-fields">
          { beerProperties.map(property => (
            <div key={property} className="add-beer-fields-input">
              <TextField onChange={this.handleChange} name={property.toLowerCase()} label={property} />
            </div>
          ))
          }
        </div>
        <Button raised onClick={this.handleSubmit} color="primary">Submit the beer!</Button>
      </div>
    );
  }
}
