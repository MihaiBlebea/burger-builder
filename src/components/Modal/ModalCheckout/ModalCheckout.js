import React from 'react';
import { IngredientList, Input, Button } from '../../exports.js';

function ModalCheckout(props)
{
    let inputs = props.fields.map((field, index)=> {
        return (
            <Input key={index} label={field.label} type={field.type}/>
        );
    });

    return (
        <div className='row' style={{justifyContent: 'space-evenly'}}>
            <div className='md-col-6'>
                <IngredientList
                    price={props.price}
                    ingredients={props.currentBurger}/>
            </div>
            <div className='md-col-6'>
                {inputs}
                <Button
                    click={props.submit.bind(this)}
                    type={'primary'}>Finish Checkout</Button>
            </div>
        </div>
    );
}

export default ModalCheckout;
