import React from 'react';
import './IngredientList.css';

function IngredientList(props)
{
    console.log(props.ingredients.length)
    let list = props.ingredients.map((ingredient, index)=> {
        return console.log(ingredient)
    });

    return (
        <div className='IngredientListPanel'>
            <h4>Ingredient list:</h4>
            <ul>
                {list}
            </ul>
            <div className='IngredientListTotal'>
                Total £{props.price}
            </div>
        </div>
    );
}

export default IngredientList;
