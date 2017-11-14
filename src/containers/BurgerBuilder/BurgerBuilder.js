import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Burger, BurgerConstructor } from '../../components/exports.js';

class BurgerBuilder extends React.Component
{
    state = {
        ingredients: ['salad', 'meat', 'cheese', 'bacon'],
        currentBurger: ['salad', 'meat', 'cheese', 'salad', 'bacon']
    }

    onDelete(index)
    {
        let ingredients = this.state.ingredients.map((ingredient, key)=> {
            return (index !== key) ? ingredient : '';
        });
        this.setState({
            currentBurger: ingredients
        });
    }

    render()
    {
        return (
            <Wrap>
                <div>
                    <Burger
                        click={this.onDelete.bind(this)}
                        ingredients={this.state.currentBurger}/>
                </div>
                <div>
                    <BurgerConstructor />
                </div>
            </Wrap>
        );
    }
}

export default BurgerBuilder;
