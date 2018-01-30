import React from 'react';
import request from 'request-promise';
import { Button, Card, CardActions, CardContent } from 'material-ui';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../constants';
import SearchField from '../../components/search-field';
import LoadingIndicator from '../../components/loading-indicator';
import './beers.scss';

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
    this.state = {
      beers: [],
      filteredBeers: [],
      loading: true
    };
    this.setFilterResult = this.setFilterResult.bind(this);
  }

  componentDidMount() {
    // TODO: Unified error handling
    const requestOptions = {
      url: `${apiUrl}/beers`,
      json: true
    };
    request.get(requestOptions)
      .then(response => {
        const beers = response.data;
        this.setState({
          beers,
          filteredBeers: beers,
          loading: false
        });
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
        { this.state.loading && <LoadingIndicator /> }
        <div className="beers-content">
          { this.state.filteredBeers.map(beer => <BeerCard key={beer.id} {...beer} />) }
        </div>
      </div>
    );
  }
}
