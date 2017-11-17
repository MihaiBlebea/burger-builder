import React from 'react';
import { Button, TypeText } from '../exports.js';
import { Link } from 'react-router-dom';
import './Offer.css';

function Offer()
{
    return (
        <div className='OfferBackground jumbotron'>
            <div className='OfferContent'>
                <h1 className='display-3 text-center OfferMain'>Do not find time to cook?</h1>
                <h3 className='text-center mb-5'>
                    <TypeText>Start building the perfect burger...</TypeText>
                </h3>

                <Link to='/burger-builder' style={{textDecoration: 'none'}}>
                    <Button
                        click={null}>Start Building!</Button>
                </Link>
            </div>
        </div>
    );
}

export default Offer;
