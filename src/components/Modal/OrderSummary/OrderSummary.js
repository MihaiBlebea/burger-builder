import React from 'react';
import { IngredientList, Button } from '../../exports.js';
import { Link } from 'react-router-dom';
import './OrderSummary.css';

function OrderSummary(props)
{
    return (
        <div>
            <IngredientList
                price={props.price}
                ingredients={props.currentBurger} />
            <div className='row ButtonRow'>
                <Button
                    click={props.cancel.bind(this)}
                    margin='0'
                    type={'danger'}>Cancel</Button>
                <Link to={{
                    pathname: '/checkout',
                    state: { price: props.price }
                }}>
                    <Button
                        click={''}
                        type={'success'}>Checkout</Button>
                </Link>
            </div>
        </div>
    );
}

export default OrderSummary;
