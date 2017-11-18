import React from 'react';
import { Button, TypeText } from '../exports.js';
import { Link } from 'react-router-dom';
import './Offer.css';

function Offer()
{
    return (
        <div className='OfferBackground'>
            <div className='OfferContent'>
                <h1 className='display-3 text-center OfferMain'>Do not find time to cook?</h1>
                <h3 className='text-center mb-5'>
                    <TypeText strings={[
                        'Build the perfect burger...',
                        'Easy and fast checkout...',
                        '...we deliver in max 20 mins'
                    ]}/>
                </h3>

                <Link to='/burger-builder'>
                    <Button
                        size={'large'}
                        click={null}>Start Building!</Button>
                </Link>
            </div>
        </div>
    );
}

export default Offer;
