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

describe('the behavior',()=>{
    it('should call the callback funcion on click',()=>{
        const callback = jest.fn();
        const starSearch = shallow(<StarSearch onClick={callback}/>);
        
        starSearch.find('input').at(0).simulate('click');

        expect(callback).toHaveBeenCalledWith('ALL');
    });

    it('should call the callback funcion on click',()=>{
        const callback = jest.fn();
        const starSearch = shallow(<StarSearch onClick={callback}/>);
        
        starSearch.find('input').at(1).simulate('click');

        expect(callback).toHaveBeenCalledWith(5);
    });

    it('should call the callback funcion on click',()=>{
        const callback = jest.fn();
        const starSearch = shallow(<StarSearch onClick={callback}/>);
        
        starSearch.find('input').at(2).simulate('click');

        expect(callback).toHaveBeenCalledWith(4);
    });

    it('should call the callback funcion on click',()=>{
        const callback = jest.fn();
        const starSearch = shallow(<StarSearch onClick={callback}/>);
        
        starSearch.find('input').at(3).simulate('click');

        expect(callback).toHaveBeenCalledWith(3);
    });

    it('should call the callback funcion on click',()=>{
        const callback = jest.fn();
        const starSearch = shallow(<StarSearch onClick={callback}/>);
        
        starSearch.find('input').at(4).simulate('click');

        expect(callback).toHaveBeenCalledWith(2);
    });

    it('should call the callback funcion on click',()=>{
        const callback = jest.fn();
        const starSearch = shallow(<StarSearch onClick={callback}/>);
        
        starSearch.find('input').at(5).simulate('click');

        expect(callback).toHaveBeenCalledWith(1);
    });
});