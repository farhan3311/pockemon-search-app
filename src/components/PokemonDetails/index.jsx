import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const PokemonDetails = (pokemonData) => {
  const [pokemon, setPokemon] = useState({});
  const goTo = useNavigate();
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonData.pokemonData.name}`);
      setPokemon(response.data);

    };
    fetchPokemon();
  }, [pokemonData.pokemonData.name]);
  console.log("pokemon data details page outside use effect",pokemon)

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-details">
      <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <p>ID: {pokemon.id}</p>

      {/* <div className="type-list">
        <h3>Types:</h3>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
          ))}
        </ul>
      </div>

      <div className="stat-list">
        <h3>Stats:</h3>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div> */}

      <button onClick={() => goTo(-1)}>Back</button>
      
     
    </div>
  );
};

export default PokemonDetails;
