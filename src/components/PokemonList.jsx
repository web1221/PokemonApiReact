import React from 'react';
import YourMom from './YourMom';
import ORange from '../orange';

export default function PokemonList() {
    const myRange = new ORange(1, 50);
    return (
        <div>
            {myRange.map(e => {
                return <YourMom pokeid={e} />;
            })}
        </div>
    );
}
