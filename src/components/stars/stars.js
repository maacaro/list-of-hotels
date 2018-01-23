import React  from 'react';
import PropTypes from 'prop-types';

const Stars=({value})=>{
    let stars=[];
    for(let i=0;i<value;i++){
        stars[i]=<img key={i} src={require(`../../assets/icons/filters/star.svg`)} height="14" width="14" />;
    }

return (<div>{stars}</div>);
}

export default Stars;