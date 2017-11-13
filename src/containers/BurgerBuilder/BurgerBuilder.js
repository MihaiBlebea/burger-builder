import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Burger } from '../../components/exports.js';

class BurgerBuilder extends React.Component
{
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render()
    {
        return (
            <Wrap>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>Controller</div>
            </Wrap>
        );
    }
}

export default BurgerBuilder;
