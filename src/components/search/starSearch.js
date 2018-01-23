import React from 'react';
import Stars from '../stars/stars';

const StarSearch = ()=>
<div>
    <div><label>Estrellas</label></div>
    <input type="checkbox" name="stars" value="ALL" defaultChecked />Todas las estrellas<br/>
    <input type="checkbox" name="stars" value="5" /><Stars value="5"/><br/>
    <input type="checkbox" name="stars" value="4"/><Stars value="4"/><br/>
    <input type="checkbox" name="stars" value="3" /><Stars value="3"/><br/>
    <input type="checkbox" name="stars" value="2"/><Stars value="2"/><br/>
    <input type="checkbox" name="stars" value="1"/><Stars value="1"/><br/>
</div>

export default StarSearch;