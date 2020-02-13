import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import YourMom from './components/YourMom';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
    return (
        <div>
            <PokemonList />
        </div>
    );
}

export default App;
