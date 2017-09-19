import React from 'react';

import Pokemon from './Pokemon';

import './PokemonPage.css';

const PokemonPage = ({ pokemon }) => (
  <section className="PokemonPage">
    <Pokemon pokemon={pokemon} />
  </section>
);

export default PokemonPage;
