import React, { Component } from 'react';

import { Header } from './components/Header';
import { List } from './components/List';
import { PokemonPage } from './components/Pokemon';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pokemonList: [],
      currentPokemon: '',
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
    const { isLoading, pokemonList, currentPokemon } = this.state;

    return (
      <div className="Pokedex">
        <Header />
        {isLoading && <main>Loading</main>}
        {!isLoading &&
          <main className="Pokedex--main-content" >
            <List allPokemon={pokemonList} />
            <PokemonPage pokemon={ currentPokemon } />
          </main>
        }
      </div>
    );
  }
}

export default App;
