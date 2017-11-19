import React from 'react';
import { LogoLink } from '../../exports.js';
// import routes from '../../../routes.js';
import './FooterContent.css';
import moment from 'moment';

function FooterContent()
{
    return (
        <div className='card navbar-dark bg-dark' style={{borderRadius: 0}}>
            <div className='card-body'>
                <div className='row FooterContent'>
                     <LogoLink link={'/home'}/><span><strong>Burger Builder®</strong>  - {moment().format('MMMM-YYYY')}</span>
                </div>
            </div>
        </div>
    );
}

export default FooterContent;
