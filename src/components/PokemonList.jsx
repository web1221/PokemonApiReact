import React from 'react';
import YourMom from './YourMom';
import ORange from '../orange';

export default function PokemonList() {
    const myRange = new ORange(1, 800);
    const gritty = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridGap: '5rem',
    };
    return (
        <div style={gritty}>
            {myRange.map((e, i) => {
                return <YourMom pokeid={e} key={i} />;
            })}
        </div>
    );
}
