import React from 'react'
import './Title.css';

function Title(props)
{
    let classes = [];

    switch(props.type)
    {
        case('small'):
            classes.push('TitleSmall');
            break;
        default:
            classes.push('TitleNormal');
    }

    return (
        <h4 className={classes.join(' ')}>{props.children}</h4>
    )
}

export default Title;
