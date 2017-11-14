import React from 'react';
import { Button } from '../exports.js';
import './BurgerConstructor.css';

function BurgerConstructor(props)
{
    // let price = (props.price > 0) ?
    return (
        <div className='BurgerConstructorPanel'>
            <Button
                click={props.reset.bind(this)}
                type={'danger'}
                margin={5}>Reset</Button>
            {
                props.ingredients.map((ingredient, index)=> {
                    return (
                        <Button
                            key={index}
                            type={'primary'}
                            click={props.add.bind(this, index)}
                            margin={5}>{ingredient.name}</Button>
                    );
                })
            }
            <Button
                click={props.reset.bind(this)}
                type={'success'}
                disabled={(props.price < 1) ? true : false}
                margin={5}>{(props.price < 1) ? 'Buy' : `Buy £${props.price}`}</Button>
        </div>
    );
}

export default BurgerConstructor;
