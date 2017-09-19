import React from 'react';

import Pokemon from './Pokemon';

import './PokemonPage.css';

const PokemonPage = ({ pokemonId }) => (
  <section className="PokemonPage">
    {pokemonId && <Pokemon pokemonId={pokemonId} />}
    {!pokemonId &&
      <div className="PokemonPage--no-pokemon">
        <h2>
          No pokémon selected
        </h2>
        <span>
          Select a pokémon from the list to see its details.
        </span>
      </div>
    }
  </section>
);

export default PokemonPage;
