import React from 'react';
import { Button, TypeText, Price } from '../exports.js';
import { Link } from 'react-router-dom';
import './Offer.css';

function Offer()
{
    return (
        <div className='OfferBackground'>
            <div className='OfferContent'>
                <div className='mb-4'>
                    <Price size={5}>Do not find time to cook?</Price>
                </div>
                <h3 className='text-center mb-5 OfferSubTitle'>
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
