import React from 'react';

function NavigationLink(props)
{
    let classes = ['nav-item'];

    if(props.active === true)
    {
        classes.push('active');
    }

    return (
        <li className={classes.join(' ')}>
            <a className='nav-link' href={props.link}>{props.linkName}</a>
        </li>
    );
}

export default NavigationLink;
