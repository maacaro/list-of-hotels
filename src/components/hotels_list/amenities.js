import React from 'react';
import PropTypes from 'prop-types';

const Amenities =({amenities})=>
<ul style={{float:'left'}}>{amenities.map((amenity,key) => <li key={key} style={{display:'inline', padding: '6px'}}>
    <img src={require(`../../assets/icons/amenities/${amenity}.svg`)} height="18" width="18" />
    </li>)}
</ul>

export default Amenities;

Amenities.propTypes = {
    amenities: PropTypes.array.isRequired,
  };