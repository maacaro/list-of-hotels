import React from 'react';
import {shallow} from 'enzyme';
import HotelFeatures from './hotel-features' 

it('should reder a `ul`',()=>{
    const app = rederHotelFeatures();
    
    expect(app.find('ul')).toHaveLength(1);
});

it('should reder a Hotel Name ',()=>{
    const app = rederHotelFeatures();
    
    expect(app.find('ul').find('li').at(0).text()).toEqual('HOTEL_NAME');
});

it('should reder a `Stars` component',()=>{
    const app = rederHotelFeatures();
    
    expect(app.find('ul').find('li').at(1).find('Stars')).toHaveLength(1);
});

it('should reder a `Ameneties` component',()=>{
    const app = rederHotelFeatures();
    
    expect(app.find('ul').find('li').at(2).find('Amenities')).toHaveLength(1);
});

function rederHotelFeatures(){
    return shallow(<HotelFeatures name={'HOTEL_NAME'}  stars = {4} amenities={['coffe-maker','restaurant']}/>);
}