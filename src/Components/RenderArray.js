import React from 'react';
import './stylesheets/renderArray.css';

const DEFAULT_COLOR = '#292b2c';


const RenderArray = ({array}) =>{
    const arrayWidth = Math.floor(window.innerWidth / (array.length * 3));
    const renderedArray = array.map( (value,index) => {
        return (
            <div className="array-bar" key={index} style={{
                backgroundColor: DEFAULT_COLOR,
                height: `${value}px`,
                width: `${arrayWidth}px`
              }} >
            </div>
        );
    })
    return (
        <div className="array-container">
            {renderedArray}
        </div>
    );
}

export default RenderArray;