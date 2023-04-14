import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
    
    console.log('card',pokemon, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[5]}.png`)
  return (

    <Link to={`/pokemon/${pokemon.name}`}>
      <div className="pokemon-card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
          alt={pokemon.name}
        />
        <h3>{pokemon.name}</h3>
      </div>    
    </Link>
  );
};

export default PokemonCard;
