import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PokemonCard, PokemonDetails } from '../../components'

export default function PokemonPage() {

    const { name } = useParams();
    const [pokemonData, setPokemonData] = useState();
    console.log("name",name)

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemonData(response.data);
            console.log('poke data',pokemonData)
        };
        fetchPokemonData();
    }, [pokemonData]);

    return (
        <div>
            {pokemonData ? (
                <>
                    
                    <PokemonDetails pokemonData= {pokemonData}
                        
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
