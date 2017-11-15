import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Burger, BurgerConstructor, Message } from '../../components/exports.js';

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

    setLimit(ingredients)
    {
        let limit = false;
        if(ingredients.length > 6)
        {
            limit = true;
        }
        return limit;
    }

    calculatePrice(ingredients)
    {
        let price = 0;
        for(let i = 0; i < ingredients.length; i++)
        {
            price += ingredients[i].price;
        }
        return price;
    }

    onDelete(index)
    {
        // set up ingredients
        let ingredients = this.state.currentBurger.filter((ingredient, key)=> {
            if(index !== key)
            {
                return true;
            }
            return false;
        });

        // set up price
        let price = this.calculatePrice(ingredients);

        // set up limit of ingredients
        let limit = this.setLimit(ingredients);

        this.setState({
            currentBurger: ingredients,
            price: price,
            limit: limit
        });
    }

    addIngredient(index)
    {
        let ingredient = this.state.ingredients[index];
        let burger = this.state.currentBurger;
        let ingredients = burger.concat([ingredient]);
        let limit = this.setLimit(ingredients);
        let price = this.calculatePrice(ingredients);

        this.setState({
            currentBurger: ingredients,
            price: price,
            limit: limit
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

    message = (
        <Message
            type={'error'}
            title={'Error!'}>You reached the limit of ingredients</Message>
    );

    render()
    {
        return (
            <Wrap>
                {(this.state.limit === true) ? this.message : null}
                <Burger
                    click={this.onDelete.bind(this)}
                    ingredients={this.state.currentBurger}/>
                <BurgerConstructor
                    ingredients={this.state.ingredients}
                    price={this.state.price}
                    limit={this.state.limit}
                    add={this.addIngredient.bind(this)}
                    reset={this.reset.bind(this)} />
            </Wrap>
        );
    }
}

export default BurgerBuilder;
