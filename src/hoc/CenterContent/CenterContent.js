import React from 'react';
import './CenterContent.css';

function CenterContent(props)
{
    return (
        <div className='container CenterContent'>
            {props.children}
        </div>
    );
}

export default CenterContent;
