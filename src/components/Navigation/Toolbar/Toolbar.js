import React from 'react';
import { NavigationLink, LogoLink } from '../../exports.js';
import routes from '../../../routes.js';

function Toolbar(props)
{
    let links = routes.map((route, index)=> {
        if(route.show === true)
        {
            return <NavigationLink
                        key={index}
                        linkName={route.linkName}
                        link={route.link}/>
        }
        return null;
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <LogoLink link={'/home'} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {links}
                </ul>
            </div>
        </nav>
    );
}

export default Toolbar;
