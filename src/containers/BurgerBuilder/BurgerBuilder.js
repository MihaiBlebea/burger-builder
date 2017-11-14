import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Burger, BurgerConstructor } from '../../components/exports.js';

class BurgerBuilder extends React.Component
{
    state = {
        ingredients: [
            {name: 'salad', price: 24},
            {name: 'meat', price: 24},
            {name: 'cheese', price: 24},
            {name: 'bacon', price: 24},
        ],
        currentBurger: [],
        price: 0
    }

    onDelete(index)
    {
        let price = this.state.price;
        let ingredients = this.state.currentBurger.splice(index, 1);
        console.log(ingredients);
        this.setState({
            currentBurger: ingredients,
            price: price - this.state.ingredients[index].price
        });
    }

    addIngredient(index)
    {
        let ingredients = this.state.currentBurger;
        let price = this.state.price;
        this.setState({
            currentBurger: ingredients.unshift(this.state.ingredients[index]),
            price: price + this.state.ingredients[index].price
        })
    }

    reset()
    {
        this.setState({
            currentBurger: [],
            price: 0
        })
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
                    <BurgerConstructor
                        ingredients={this.state.ingredients}
                        price={this.state.price}
                        add={this.addIngredient.bind(this)}
                        reset={this.reset.bind(this)} />
                </div>
            </Wrap>
        );
    }
}

export default BurgerBuilder;
