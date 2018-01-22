import React, { Component } from 'react';
import Amenities from './amenities.js';
var enzyme = require('enzyme');

const amenities= [
    'coffe-maker',
    'restaurant',
    'bathtub',
    'beach-pool-facilities',
    'separate-bredroom'
  ];

var wrapper = enzyme.shallow(<Amenities amenities={amenities}/>);

it('should have a <ul> as outest element',()=>{

expect(wrapper.find('ul')).toHaveLength(1);
});

it('should have as many <li> element as amenities',()=>{
    const amenitiesLength =  amenities.length;

expect(wrapper.find('ul').find('li')).toHaveLength(amenitiesLength);
});
