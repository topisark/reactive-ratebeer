import React from 'react';
import request from 'request-promise';
import { Button, Card, CardActions, CardContent } from 'material-ui';
import { Link } from 'react-router-dom';
import './beers.scss';
import SearchField from '../../components/search-field';

const BeerCard = (props) => (
  <Card className="card">
    <CardContent>
      <h2>{props.name}</h2>
      <h3>{props.brewery}</h3>
      <p className="card-description">{props.description}</p>
    </CardContent>
    <CardActions>
      <Link to={`/beers/${props.id}`}>
        <Button>Learn more</Button>
      </Link>
    </CardActions>
  </Card>
);

export default class BeersPage extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Get beers from server
    this.state = { beers: [], filteredBeers: [] };
    this.setFilterResult = this.setFilterResult.bind(this);
  }

  componentDidMount() {
    // TODO: Url to env or constants?
    // TODO: Unified error handling
    const requestOptions = {
      url: 'https://q18qcvcpq8.execute-api.eu-west-1.amazonaws.com/dev/beers',
      json: true
    };
    request.get(requestOptions)
      .then(response => {
        this.setState({ beers: response.data, filteredBeers: response.data });
      });
  }

  setFilterResult(filteredBeers) {
    this.setState({ filteredBeers });
  }

  render() {
    return (
      <div className="beers">
        <div className="beers-filter">
          <SearchField
            label="Filter by name"
            fieldToSearch="name"
            collection={this.state.beers}
            setResult={this.setFilterResult}
          />
        </div>
        <div className="beers-content">
          {this.state.filteredBeers.map(beer => <BeerCard key={beer.id} {...beer} />)}
        </div>
      </div>
    );
  }
}
