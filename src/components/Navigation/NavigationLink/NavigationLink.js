import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLink(props)
{
    let classes = ['nav-item'];

    if(props.active === true)
    {
        classes.push('active');
    }

    return (
        <li className={classes.join(' ')}>
            <Link className='nav-link' to={props.link}>{props.linkName}</Link>
        </li>
    );
}

export default NavigationLink;
