import React from 'react';
import StarSearch from './starSearch';

import {shallow} from 'enzyme';

it('shuld render 6 inpute checkbox',()=>{
    const starSearch = shallow(<StarSearch/>);
    
    expect(starSearch.find('input')).toHaveLength(6); 
});

it('shuld render a label',()=>{
    const starSearch = shallow(<StarSearch/>);
    
    expect(starSearch.find('label')).toHaveLength(1); 
});