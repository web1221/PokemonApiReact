import React, { useState } from 'react';
import axios from 'axios';

export default function YourMom(props) {
    const [pokemon, setPokemon] = useState({});
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeid}/`)
        .then(res => {
            setPokemon(res.data.sprites.front_default);
            console.log(res);
        });
    return (
        <div>
            <img src={pokemon} alt="yolo" />
        </div>
    );
}
