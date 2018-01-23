import React from 'react';
import StarSearch from './starSearch';
import NameSearch from './nameSearch';


const Search = ()=>
    <ul>
        <li>Filtros</li>
        <li><NameSearch/></li>
        <li><StarSearch/></li>
    </ul>

export default Search;