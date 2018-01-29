import React from 'react';
import { Button, Card, CardActions, CardContent } from 'material-ui';
import { Link } from 'react-router-dom';
import './beers.scss';

const mockBeers = [
  {
    id: 1,
    name: 'Malmgard IPA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper tristique risus,.'
  },
  {
    id: 2,
    name: 'Koff 3',
    description: 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit. Morbi semper tristique risus, id laoreet sapien varius non. ' +
    'Pellentesque ac ullamcorper libero, quis viverra ex.'
  },
  {
    id: 3,
    name: 'Weihenstephaner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Morbi semper tristique risus, id laoreet sapien varius non.'
  },
  {
    id: 4,
    name: 'Punk IPA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

const BeerCard = (props) => (
  <Card key={props.id} className="card">
    <CardContent>
      <h3>{props.name}</h3>
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
        {mockBeers.map(beer => <BeerCard {...beer} />)}
      </div>
    );
  }
}
