import React from 'react';

import { Spinner } from '../Spinner';

import './Pokemon.css';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokemon: null,
    };
  }

  componentDidMount() {
    this.fetchPokemon(this.props.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.pokemonId === this.props.pokemonId) return;
    this.fetchPokemon(newProps.pokemonId);
  }

  fetchPokemon(id) {
    this.setState({ isLoading: true });
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      this.setState({ isLoading: false, pokemon: data })
    });
  }

  renderImage() {
    return <img
      className="Pokemon--image"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${this.props.pokemonId}.png`}
    />;
  }

  render() {
    const { pokemonId } = this.props;

    if (this.state.isLoading) {
      return <Spinner />;
    }

    return (
      <div className="Pokemon">
        {this.renderImage()}
      </div>
    );
  }
}

export default Pokemon;
