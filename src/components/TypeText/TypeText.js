import React from 'react';
import './TypeText.css';

function TypeText(props)
{
    return (
        <div className='typewriter'>
            <p>{props.children}</p>
        </div>
    );
}

export default TypeText;
