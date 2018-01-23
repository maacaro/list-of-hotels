import React from 'react';
import Stars from './stars';
import {shallow} from 'enzyme'

it('should render as many stars as stars prop value is',()=>{
    const stars = shallow(<Stars value={3}/>)
    
    expect(stars.find('img')).toHaveLength(3);
});