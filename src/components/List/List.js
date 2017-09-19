import React from 'react';

import { namefy } from '../utils';

import './List.css';

class List extends React.Component {
  render() {
    const { allPokemon } = this.props;

    return (
      <section
        className="List"
      >
        <ul className="List--list">
          {allPokemon.map(pokemon => (
            <li
              className="List--list-pokemon"
              key={pokemon.name}
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
