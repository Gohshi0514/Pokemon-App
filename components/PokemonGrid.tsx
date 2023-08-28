import React from 'react';
import Card from './Card';
import { pokemonType } from '../types/types';

type PokemonGridProps = {
  pokemonData: pokemonType[],
};

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemonData }) => {
  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="md:grid grid-cols-2 gap-4 lg:grid-cols-3 mt-5 my-10">
      {pokemonData.map((pokemon, i) => (
        <Card key={i} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;
