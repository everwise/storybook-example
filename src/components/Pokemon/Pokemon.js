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
    const { pokemonId } = this.props;

    return (
      <div>
        { pokemonId }
      </div>
    );
  }
}

export default Pokemon;
