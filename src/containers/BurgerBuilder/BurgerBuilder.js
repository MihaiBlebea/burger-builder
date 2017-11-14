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
        let price = this.state.ingredients[index].price
        let ingredients = this.state.currentBurger.filter((ingredient, key)=> {
            if(index !== key)
            {
                return true;
            }
            return false;
        });
        this.setState({
            currentBurger: ingredients,
            price: this.state.price - price
        });
    }

    addIngredient(index)
    {
        let ingredient = this.state.ingredients[index].name;
        let burger = this.state.currentBurger;
        let price = this.state.price;
        this.setState({
            currentBurger: burger.concat([ingredient]),
            price: price + this.state.ingredients[index].price
        });
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
