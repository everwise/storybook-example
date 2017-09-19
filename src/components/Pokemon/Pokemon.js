import React from 'react';

import './Pokemon.css';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <div>
        Placeholder for Pokemon
      </div>
    );
  }
}

export default Pokemon;
