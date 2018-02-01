import React from 'react';
import request from 'request-promise';
import { Button, Dialog, TextField } from 'material-ui';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../constants';
import './add-beer.scss';

const beerProperties = ['Name', 'Brewery', 'Description'];

const SubmitDialog = (props) => (
  <Dialog open>
    <div className="add-beer-dialog">
      <h1>{ props.message }</h1>
      <Link to="/beers">
        <Button>See the beers</Button>
      </Link>
    </div>
  </Dialog>
);

// TODO: Validation?
export default class AddBeerPage extends React.Component {
  constructor() {
    super();
    this.state = { dialogMessage: null };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { name, brewery, description } = this.state;

    const requestOptions = {
      url: `${apiUrl}/beers`,
      json: true,
      body: {
        name,
        brewery,
        description
      }
    };

    request.post(requestOptions)
      .then(() => {
        this.setState({ dialogMessage: 'Beer added, yay!' });
      })
      .catch(err => {
        console.error('Error submitting form', err.stack);
        this.setState({ dialogMessage: 'Sorry about that, something went wrong. :(' });
      });
  };

  render() {
    const { dialogMessage } = this.state;
    return (
      <div className="add-beer">
        { dialogMessage && <SubmitDialog message={dialogMessage} /> }
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
