import React from 'react';
import { NavigationLink, LogoLink } from '../../exports.js';

function Toolbar(props)
{
    let router = [
        { linkName: 'Home', link: '/' },
        { linkName: 'Builder', link: '/builder' },
        { linkName: 'Orders', link: '/orders' },
        { linkName: 'Contact', link: '/contact' }
    ]

    let links = router.map((link, index)=> {
        return <NavigationLink
                    key={index}
                    linkName={link.linkName}
                    link={link.link}/>
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <LogoLink link={'/'} />
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
