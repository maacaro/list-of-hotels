import React  from 'react';
import Amenities from './amenities.js';
import Stars from '../stars/stars';
import Price from './price.js';
import PropTypes from 'prop-types';

const Hotel =({name,stars, amenities, image, price})=><ul className='hotel'>
    <li>
        <img src={require(`../../assets/images/hotels/${image}`)}/>
    </li>
    <li>
        <div>{name}</div>
        <div><Stars value={stars}/></div>
        <Amenities amenities={amenities}/>
    </li>
      <Price price = {price}/>
    <li>
        
    </li>
</ul>

export default Hotel;

Hotel.propTypes = {
    name: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    amenities: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};