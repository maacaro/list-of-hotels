import React from 'react';
import StarSearch from './starSearch';
import NameSearch from './nameSearch';


const Search = ({starsOnChange,nameOnChange})=>
    <div className="search" >
    <ul>
        <li>Filtros</li>
        <li><NameSearch onClick = {nameOnChange}/></li>
        <li><StarSearch onClick ={starsOnChange}/></li>
    </ul>
    </div>
export default Search;