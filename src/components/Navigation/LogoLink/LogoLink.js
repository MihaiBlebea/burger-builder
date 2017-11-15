import React from 'react';
import logo from '../../../assets/logo.png';

function LogoLink(props)
{
    console.log(logo);
    return (
        <a className="navbar-brand" href={props.link}>
            <img style={{maxWidth: 50 + 'px'}} alt='app-logo' src={logo}/>
        </a>
    );
}

export default LogoLink;
