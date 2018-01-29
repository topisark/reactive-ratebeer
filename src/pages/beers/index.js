import React from 'react';
import { Button, Card, CardActions, CardContent } from 'material-ui';
import { Link } from 'react-router-dom';
import './beers.scss';
import SearchField from '../../components/search-field';

const mockBeers = [
  {
    id: 1,
    name: 'Malmgard IPA',
    brewery: 'Malmgard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper tristique risus,.'
  },
  {
    id: 2,
    name: 'Koff 3',
    brewery: 'Sinberychoff',
    description: 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit. Morbi semper tristique risus, id laoreet sapien varius non. ' +
    'Pellentesque ac ullamcorper libero, quis viverra ex.'
  },
  {
    id: 3,
    name: 'Weihenstephaner Pils',
    brewery: 'Weihenstephaner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Morbi semper tristique risus, id laoreet sapien varius non.'
  },
  {
    id: 4,
    name: 'Punk IPA',
    brewery: 'Brewdog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

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
    this.state = { beers: mockBeers };
    this.setFilterResult = this.setFilterResult.bind(this);
  }

  setFilterResult(beers) {
    this.setState({ beers });
  }

  render() {
    return (
      <div className="beers">
        <div className="beers-filter">
          <SearchField label="Filter beers" collection={this.state.beers} setResult={this.setFilterResult} />
        </div>
        <div className="beers-content">
          {this.state.beers.map(beer => <BeerCard key={beer.id} {...beer} />)}
        </div>
      </div>
    );
  }
}
