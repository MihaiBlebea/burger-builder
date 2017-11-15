import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Burger, BurgerConstructor } from '../../components/exports.js';

class BurgerBuilder extends React.Component
{
    state = {
        ingredients: [
            {name: 'salad', price: 2},
            {name: 'meat', price: 1.5},
            {name: 'cheese', price: 5},
            {name: 'bacon', price: 3},
        ],
        currentBurger: [],
        limit: false,
        price: 0
    }

    onDelete(index)
    {
        let ingredients = this.state.currentBurger.filter((ingredient, key)=> {
            if(index !== key)
            {
                return true;
            }
            return false;
        });
        this.setState({
            currentBurger: ingredients,
            price: 12,
            limit: (this.state.currentBurger.length < 6) ? false : true
        });
    }

    addIngredient(index)
    {
        let ingredient = this.state.ingredients[index];
        let burger = this.state.currentBurger;
        let price = this.state.price;

            this.setState({
                currentBurger: burger.concat([ingredient]),
                price: price + this.state.ingredients[index].price,
                limit: (burger.length < 6) ? false : true
            });

    }

    reset()
    {
        this.setState({
            currentBurger: [],
            price: 0,
            limit: false
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
                        limit={this.state.limit}
                        add={this.addIngredient.bind(this)}
                        reset={this.reset.bind(this)} />
                </div>
            </Wrap>
        );
    }
}

export default BurgerBuilder;
