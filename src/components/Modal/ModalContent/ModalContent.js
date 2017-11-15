import React from 'react';
import {IngredientList } from '../../exports.js';

function ModalContent(props)
{
    return (
        <div className='row'>
            <div className='md-col-6'>
                <IngredientList
                    price={props.price}
                    ingredients={props.currentBurger}/>
            </div>
            <div className='md-col-6'>

            </div>
        </div>
    );
}

export default ModalContent;
