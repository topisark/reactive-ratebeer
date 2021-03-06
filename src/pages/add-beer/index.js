import React from 'react';
import request from 'request-promise';
import { Button, Dialog, TextField } from 'material-ui';
import { Link } from 'react-router-dom';
import page from '../../components/higherorder-page';
import { apiUrl, PageState } from '../../constants';
import { beerIsValid, validateBeerField } from '../../validations';
import './add-beer.scss';

const beerProperties = ['Name', 'Brewery', 'Description'];

const getBeerFromState = state => {
  const { name, brewery, description } = state;
  return {
    name,
    brewery,
    description
  };
};

const SuccessDialog = () => (
  <Dialog open>
    <div className="add-beer-dialog">
      <h2>Beer added, yay!</h2>
      <Link to="/beers">
        <Button>See the beers</Button>
      </Link>
    </div>
  </Dialog>
);

class AddBeerPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pageState: PageState.READY,
      validationMessages: {},
      beerValid: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleBlur = (event) => {
    const { name, value } = event.target;
    const beer = getBeerFromState(this.state);
    this.setState({
      beerValid: beerIsValid(beer),
      validationMessages: { ...this.state.validationMessages, [name]: validateBeerField(name, value) }
    });
  };

  handleSubmit = () => {
    this.setState({ pageState: PageState.LOADING });

    const requestOptions = {
      url: `${apiUrl}/beers`,
      json: true,
      body: getBeerFromState(this.state)
    };

    request.post(requestOptions)
      .then(() => {
        this.setState({ pageState: PageState.DIALOG_OPEN });
      })
      .catch(this.props.handleError);
  };

  render() {
    const { pageState, validationMessages, beerValid } = this.state;
    return (
      <div className="add-beer">
        { pageState === PageState.DIALOG_OPEN && <SuccessDialog /> }
        <h1>Add a beer!</h1>
        <div className="add-beer-fields">
          { beerProperties.map(property => (
            <div key={property} className="add-beer-fields-input">
              <TextField
                helperText={validationMessages[property.toLowerCase()]}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                name={property.toLowerCase()}
                label={property}
              />
            </div>
          ))
          }
        </div>
        <Button
          raised
          onClick={this.handleSubmit}
          disabled={!beerValid || pageState === PageState.LOADING}
          color="primary"
        >
          Submit the beer!
        </Button>
      </div>
    );
  }
}

export default page(AddBeerPage);
