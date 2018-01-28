import React from 'react';
import { Button, Card, CardActions, CardContent } from 'material-ui';
import './breweries.scss';

const mockBrweries = [
  {
    id: 1,
    name: 'Malmgard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper tristique risus,.'
  },
  {
    id: 2,
    name: 'Koff',
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
    name: 'Olavinlinnan panimo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

const BreweryCard = (props) => (
  <Card key={props.id} className="card">
    <CardContent>
      <h3>{props.name}</h3>
      <p className="card-description">{props.description}</p>
    </CardContent>
    <CardActions>
      <Button>Learn more</Button>
    </CardActions>
  </Card>
);

export default class BreweriesPage extends React.Component {
  render() {
    return (
      <div className="breweries">
        {mockBrweries.map(brewery => <BreweryCard {...brewery} />)}
      </div>
    );
  }
}
