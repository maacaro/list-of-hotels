import React from 'react';
import Stars from '../stars/stars';

const StarSearch = ({onClick})=>
<div>
    <div><label>Estrellas</label></div>
    <input type="checkbox" name="stars" onClick ={()=>onClick('ALL')} value="ALL" defaultChecked />Todas las estrellas<br/>
    <input type="checkbox" name="stars" onClick ={()=>onClick(5)} value="5" /><Stars value="5"/><br/>
    <input type="checkbox" name="stars" onClick ={()=>onClick(4)} value="4"/><Stars value="4"/><br/>
    <input type="checkbox" name="stars" onClick ={()=>onClick(3)} value="3" /><Stars value="3"/><br/>
    <input type="checkbox" name="stars" onClick ={()=>onClick(2)} value="2"/><Stars value="2"/><br/>
    <input type="checkbox" name="stars" onClick ={()=>onClick(1)} value="1"/><Stars value="1"/><br/>
</div>

export default StarSearch;