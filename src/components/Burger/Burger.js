import React from 'react';
import './Burger.css';
import { BurgerIngredient } from '../exports.js';

function Burger(props)
{

    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {
                props.ingredients.map((ingredient, index)=> {
                    return <BurgerIngredient
                                click={props.click.bind(this, index)}
                                key={index}
                                type={ingredient.name} />;
                })
            }
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;
