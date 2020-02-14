import React, { useState } from 'react';
import axios from 'axios';
import pokeTypes from '../poketypes';

const capitalize = s => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function YourMom(props) {
    const [pokemon, setPokemon] = useState(undefined);
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeid}/`)
        .then(res => {
            setPokemon(res.data);
            console.log(res.data);
        });
    const card = {
        width: '14rem',
        height: '20rem',
        border: '3px solid',
        borderRadius: '10px',
        padding: '1rem',
    };
    const imgContainer = {
        width: '90%',
        border: '2px solid black',
        margin: '1rem auto',
        backgroundColor: 'white',
    };
    const imgStyle = {
        height: '10rem',
        display: 'block',
        margin: '0 auto',
    };
    const colorSpread = arr => {
        return {
            ...card,
            backgroundColor: pokeTypes[arr[arr.length - 1]['type']['name']],
            boxShadow: `0 0 5px 5px ${pokeTypes[arr[0].type.name]}`,
        };
    };
    return (
        <div style={pokemon ? colorSpread(pokemon.types) : card}>
            <div style={imgContainer}>
                <img
                    src={pokemon ? pokemon.sprites.front_default : ''}
                    style={imgStyle}
                    alt="yolo"
                />
            </div>
            <div>
                <h2 style={{ textAlign: 'center' }}>
                    {pokemon ? capitalize(pokemon.name) : 'Loading...'}
                </h2>
            </div>
        </div>
    );
}
