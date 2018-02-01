import React from 'react';
import { TextField } from 'material-ui';

export default class SearchField extends React.Component {
  handleChange = (event) => {
    const { collection, setResult, fieldToSearch } = this.props;
    const searchString = event.target.value;

    const filteredItems = collection.filter(item =>
      item[fieldToSearch].toLowerCase().includes(searchString.toLowerCase())
    );

    setResult(filteredItems);
  };

  render() {
    const { label } = this.props;
    return (
      <TextField label={label} onChange={this.handleChange} />
    );
  }
}
