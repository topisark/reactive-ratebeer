import React from 'react';
import request from 'request-promise';
import { Card, CardContent } from 'material-ui';
import { apiUrl, PageState } from '../../constants';
import page from '../../components/higherorder-page';
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
  </Card>
);

class BeersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      filteredBeers: [],
      pageState: PageState.LOADING
    };
  }

  componentDidMount() {
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
          pageState: PageState.READY
        });
      })
      .catch(this.props.handleError);
  }

  setFilterResult = (filteredBeers) => {
    this.setState({ filteredBeers });
  };

  render() {
    const { pageState, beers, filteredBeers } = this.state;
    return (
      <div className="beers">
        <div className="beers-filter">
          <SearchField
            label="Filter by name"
            fieldToSearch="name"
            collection={beers}
            setResult={this.setFilterResult}
          />
        </div>
        { pageState === PageState.LOADING && <LoadingIndicator /> }
        <div className="beers-content">
          { filteredBeers.map(beer => <BeerCard key={beer.id} {...beer} />) }
        </div>
      </div>
    );
  }
}

export default page(BeersPage);
