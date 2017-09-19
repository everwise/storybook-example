import React, { Component } from 'react';

import { Header } from './components/Header';
import { List } from './components/List';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pokemonList: [],
    };
  }
  
  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/?limit=811')
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        this.setState({ pokemonList: data.results, isLoading: false });
      });
  }

  render() {
    const { isLoading, pokemonList } = this.state;

    return (
      <div className="Pokedex">
        <Header />
        {isLoading && <h1>Loading</h1>}
        {!isLoading && <List allPokemon={pokemonList} />}
      </div>
    );
  }
}

export default App;
