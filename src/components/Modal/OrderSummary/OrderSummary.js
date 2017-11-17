import React from 'react';
import { IngredientList, Button } from '../../exports.js';
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
                    type={'danger'}>Cancel</Button>
                <Button
                    click={props.submit.bind(this, 'Serban Blebea', '0757103898', 'NW2 1UT')}
                    type={'success'}>Checkout</Button>
            </div>
        </div>
    );
}

export default OrderSummary;
