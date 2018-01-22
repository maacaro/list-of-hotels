import React from 'react';
import Search from './search';
import {shallow} from 'enzyme'

it('should render a ul html tag',()=>{
    const search = shallow(<Search/>)

    expect(search.find('ul')).toHaveLength(1)
});

it('should render a ul html tag with 3 li',()=>{
    const search = shallow(<Search/>)

    expect(search.find('ul').find('li')).toHaveLength(3)
});

it('should render ``Filtros` at the fist child of ul',()=>{
    const search = shallow(<Search/>)

    expect(search.find('ul').childAt(0).text()).toEqual('Filtros')
});