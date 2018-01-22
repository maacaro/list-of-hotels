import React  from 'react';
import PropTypes from 'prop-types';


const Price = ({price})=>  <ul>
<li><div>Precio por noche por Habitacion</div></li>
<li><div>ARS {price}</div></li>
<li><div><button type="button">Ver Hotel</button></div></li>
</ul>;

export default Price;