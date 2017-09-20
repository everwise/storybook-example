import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div className="Book" />
    );
  }
}

export default Book;
