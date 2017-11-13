import React from 'react';
import './Burger.css';
import { BurgerIngredient } from '../exports.js';

function Burger(props)
{
    const transformedIngredients = Object.keys(props.ingredients);
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {
                transformedIngredients.map((ingredient, index)=> {
                    return <BurgerIngredient
                                key={index}
                                type={ingredient} />;
                })
            }
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;
