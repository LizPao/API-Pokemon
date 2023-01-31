import React, { useState } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const buscarDatos = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => {
            return response.json();
        }).then(response => {
            setPokemons(response.results.map((pokemon)=>pokemon.name));
        }).catch(err=>{
            console.log(err);
        });
    }
    return (
        <>
            <button className='btn-pokemon' onClick={buscarDatos}>Fetch pokemon</button>
            <ol className='lista-pokemon'>
                {
                    pokemons.map((pokemon, index)=><li key={index}>{pokemon}</li>)
                }
            </ol>
        </>
    )
}

export default Pokemon