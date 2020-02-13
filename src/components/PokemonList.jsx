import React from 'react';
import YourMom from './YourMom';

export default function PokemonList() {
    const list = new Array(1, 2, 3, 401, 402);
    console.log(list);
    return (
        <div>
            {list.map(e => {
                return <YourMom pokeid={e} />;
            })}
        </div>
    );
}
