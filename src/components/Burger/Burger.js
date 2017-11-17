import React from 'react';
import './Burger.css';
import { BurgerIngredient } from '../exports.js';

function Burger(props)
{
    let ingredients = props.ingredients.map((ingredient, index)=> {
        return <BurgerIngredient
                    click={props.click.bind(this, index)}
                    key={index}
                    type={ingredient.name} />;
    })

    let message = (<p>Please start adding ingredients</p>);

    return (
        <div className='Burger mt-5'>
            <BurgerIngredient type='bread-top' />
            {(props.ingredients.length === 0) ? message : ingredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;
