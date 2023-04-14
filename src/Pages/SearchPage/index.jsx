import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {SearchBar, PokemonCard } from '../../components';

const SearchPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
      setPokemonList(response.data.results);
    };
    fetchPokemonList();
  }, []);
  console.log
  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
