import React from 'react';
import { NavigationLink } from '../../exports.js';
import routes from '../../../routes.js';
import './FooterContent.css';

function FooterContent()
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
        <div className='card navbar-dark bg-dark'>
            <div className='card-body'>
                <div className='row FooterContent'>
                    <div className='col-md-6'>
                        <h5>Explore</h5>
                        <ul className='nav nav-item flex-column' style={{ borderLeft: 'solid 2px grey'}}>
                            {links}
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <h5>Contact</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContent;
