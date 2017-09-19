import React from 'react';

import { namefy } from '../utils';

import './List.css';

class List extends React.Component {
  getClickHandler(index) {
    return (event) => {
      event.preventDefault();
      this.props.updatePokemonId(index);
    };
  }
  
  render() {
    const { allPokemon } = this.props;

    return (
      <section
        className="List"
      >
        <ul className="List--list">
          {allPokemon.map((pokemon, index) => (
            <li
              className="List--list-pokemon"
              key={pokemon.name}
              onClick={this.getClickHandler(index + 1)}
            >
              {namefy(pokemon.name)}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default List;
