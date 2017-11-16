import React from 'react';
import './IngredientList.css';

function IngredientList(props)
{
    let list = props.ingredients.map((ingredient, index)=> {
        return (
            <li
                key={index}
                className='IngredientList'>
                <span style={{fontWeight: 'bold', color: '#0069D9'}}>{ingredient.count}x</span> {ingredient.name} ( £{ingredient.price * ingredient.count} )
            </li>
        );
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
