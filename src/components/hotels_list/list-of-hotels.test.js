import React from 'react';
import {shallow} from 'enzyme';
import ListOfHotels from './list-of-hotels'

function renderListOfHotels(){
    const hotels =[
        {id:1, name:'hotel a',stars:3, amenities:['coffe-maker','restaurant'],image:'9291429_9_b.jpg'},
        {id:2, name:'hotel b',stars:3, amenities:['coffe-maker','restaurant'],image:'9291429_9_b.jpg'}
    ];

    return shallow(<ListOfHotels  data={hotels}/>);
}
it('should render a Grid',()=>{
    const app =renderListOfHotels();
    
    expect(app.find('Grid')).toHaveLength(1);
});

describe('The `<Grid/>`',()=>{
    it('should render a row with 3 columns',()=>{
        const app =renderListOfHotels();
        
        expect(app.find('Grid').find('Row').at(0).find('Col')).toHaveLength(3);
    });

    it('should render the hotel image at the first Col',()=>{
        const app =renderListOfHotels();
        
        expect(app.find('Grid').find('Row').find('Col').at(0).find('img')).toHaveLength(1);
    });

    it('should render the hotel features at the second Col',()=>{
        const app =renderListOfHotels();
        
        expect(app.find('Grid').find('Row').find('Col').at(1).find('HotelFeatures')).toHaveLength(1);
    });

    it('should render the hotel price at the third Col',()=>{
        const app =renderListOfHotels();
        
        expect(app.find('Grid').find('Row').find('Col').at(2).find('Price')).toHaveLength(1);
    });

    it('should render as many rows as hotel received in props',()=>{
        const app = renderListOfHotels();
        
        expect(app.find('Grid').find('Row')).toHaveLength(2);
    });

});