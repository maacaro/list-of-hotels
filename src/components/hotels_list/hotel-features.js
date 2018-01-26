import React from 'react';
import Stars from '../stars/stars';
import Amenities from './amenities';
import PropTypes from 'prop-types';

const HotelFeatures =({name, stars, amenities})=>
    <ul>
        <li>{name}</li>
        <li><Stars value={stars}/></li>
        <li><Amenities amenities={amenities}/></li>
    </ul>

export default HotelFeatures;

HotelFeatures.propTypes = {
    name: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    amenities: PropTypes.array.isRequired,
};