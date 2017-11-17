import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function LogoLink(props)
{
    console.log(logo);
    return (
        <Link className="navbar-brand" to={props.link}>
            <img style={{maxWidth: 50 + 'px'}} alt='app-logo' src={logo}/>
        </Link>
    );
}

export default LogoLink;
