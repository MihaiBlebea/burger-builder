import React from 'react';
import { Price } from '../../components/exports.js';
import { CenterContent } from '../../hoc/exports.js';

function Contact()
{

    return (
        <CenterContent>
            <Price>
                Contact...
            </Price>
            <div className='row'>
                <div className='col-md-6'>

                </div>
                <div className='col-md-6'>
                    Address
                </div>
            </div>
        </CenterContent>
    );
}

export default Contact;
