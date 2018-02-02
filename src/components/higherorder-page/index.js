import React from 'react';

// Higher order component to share functionality between pages
// A bit thin at the moment, but will probably get more meat later!
export default function page(WrappedComponent) {
  class Page extends React.Component {
    handleError = (err) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Unexpected error', err);
      } else {
        this.props.history.push('/error');
      }
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleError={this.handleError}
        />
      );
    }
  }
  return (Page);
}

