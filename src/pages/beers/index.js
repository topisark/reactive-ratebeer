import React from 'react';
import { Button, Card, CardActions, CardContent } from 'material-ui';
import { Link } from 'react-router-dom';
import './beers.scss';

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
  render() {
    return (
      <div className="beers">
        {mockBeers.map(beer => <BeerCard key={beer.id} {...beer} />)}
      </div>
    );
  }
}
