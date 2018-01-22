import React from 'react';

const SearchName = ()=>
    <ul>
        <li>
            <img src={require(`../../assets/icons/filters/search.svg`)} height="14" width="14" />
            <label>Nombre del Hotel</label>
        </li>
        <li>
            <input type="text" name="fname"/><button type="button">Aceptarl</button>
        </li>
    </ul>

export default SearchName;