import React from 'react';
import NameSearch from './nameSearch';
import {shallow} from 'enzyme'

it('should render a ul html tag',()=>{
    const search = shallow(<NameSearch/>)

    expect(search.find('ul')).toHaveLength(1)
});

it('should render a ul html tag with 3 li',()=>{
    const search = shallow(<NameSearch/>)

    expect(search.find('ul').find('li')).toHaveLength(2)
});

it('should render `img` at the fist child of ul',()=>{
    const search = shallow(<NameSearch/>)

    expect(search.find('ul').childAt(0).find('img')).toHaveLength(1);
});

it('should render `label` at the fist child of ul',()=>{
    const search = shallow(<NameSearch/>)

    expect(search.find('ul').childAt(0).find('label')).toHaveLength(1);
});

it('should render `Nombre del Hotel` at the fist child of ul',()=>{
    const search = shallow(<NameSearch/>)

    expect(search.find('ul').childAt(0).find('label').text()).toEqual('Nombre del Hotel');
});

it('should render text input at the second child of the ul',()=>{
    const search = shallow(<NameSearch/>)

    expect(search.find('ul').childAt(1).find('input')).toHaveLength(1);
});

it('should render a button at the second child of the ul',()=>{
    const search = shallow(<NameSearch/>)

    expect(search.find('ul').childAt(1).find('button')).toHaveLength(1);
});