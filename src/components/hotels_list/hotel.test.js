import React from 'react';
import Hotel from './hotel';
var enzyme = require('enzyme');

const amenities= [
    'coffe-maker',
    'restaurant',
    'bathtub',
    'beach-pool-facilities',
    'separate-bredroom'
  ];

var wrapper = enzyme.shallow(<Hotel name ={"Stefano"} stars={3} price={44} amenities={amenities} image={'9291429_9_b.jpg'}/>);

it('should have a <ul> as outest element',()=>{

expect(wrapper.find('ul')).toHaveLength(1);
});

it('should have 3 <li> as outest element',()=>{
    
expect(wrapper.find('ul').find('li')).toHaveLength(3);
});

it('should have a <img> at its first li',()=>{
    
        expect(wrapper.find('ul').childAt(0).find('img')).toHaveLength(1);
});

it('should have a 2 <div> at its second li',()=>{
    
    expect(wrapper.find('ul').childAt(1).find('div')).toHaveLength(2);
});

it('should have a amenities component at its third li',()=>{
    
    expect(wrapper.find('ul').childAt(1).find('Amenities')).toHaveLength(1);
});

it('should have the hotel name at the first div',()=>{
    
    expect(wrapper.find('ul').childAt(1).childAt(0).text()).toEqual("Stefano");
});