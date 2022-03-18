import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,area,population,flags} =props.country
    // console.log(props.country)
    return (
        <div className='country'>
            <h1>Name:{name}</h1>
            <img src={flags.png} alt="" />
            <p>population:{population}</p>
            <p><small>area:{area}</small></p>
            
        </div>
    );
};

export default Country;