import React from 'react';
import { TextField } from 'material-ui';

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { collection, setResult } = this.props;
    const searchString = event.target.value;
    const filteredBeers = collection.filter(beer => beer.name.toLowerCase().includes(searchString.toLowerCase()));
    setResult(filteredBeers);
  }

  render() {
    const { label } = this.props;
    return (
      <TextField label={label} onChange={this.handleChange} />
    );
  }
}
