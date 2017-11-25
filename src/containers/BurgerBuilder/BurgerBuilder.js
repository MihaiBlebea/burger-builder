import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import {
    Burger,
    BurgerConstructor,
    Modal,
    OrderSummary,
    Footer,
    Loader } from '../../components/exports.js';

class BurgerBuilder extends React.Component
{
    state = {
        ingredients: [
            { name: 'salad', price: 2 },
            { name: 'meat', price: 1.5 },
            { name: 'cheese', price: 5 },
            { name: 'bacon', price: 3 },
        ],
        currentBurger: [],
        price: 0,
        modal: false,
        loading: false,
    }

    setLoading()
    {
        this.setState({
            loading: true
        })
    }

    removeLoading()
    {
        this.setState({
            loading: false
        })
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

    onDeleteHandler(index)
    {
        let ingredients = this.state.currentBurger.filter((ingredient, key)=> {
            if(index !== key)
            {
                return true;
            }
            return false;
        });
        let price = this.calculatePrice(ingredients);

        this.setState({
            currentBurger: ingredients,
            price: price
        });
    }

    addIngredientHandler(index)
    {
        let ingredient = this.state.ingredients[index];
        let burger = this.state.currentBurger;
        let ingredients = burger.concat([ingredient]);
        let price = this.calculatePrice(ingredients);

        this.setState({
            currentBurger: ingredients,
            price: price
        });
    }

    reset()
    {
        this.setState({
            currentBurger: [],
            price: 0
        })
    }

    toggleModalHandler()
    {
        let modal = this.state.modal;
        this.setState({
            modal: !modal
        })
    }

    parseIngredients(ingredients)
    {
        let result = [];
        for(let i = 0; i < ingredients.length; i++)
        {
            let container = {};
            let exists = false;
            for(let j = 0; j < result.length; j++)
            {
                if(result[j].name === ingredients[i].name)
                {
                    exists = j;
                }
            }

            if(exists !== false)
            {
                result[exists].count++ ;
            } else {
                container = {
                    name: ingredients[i].name,
                    count: 1,
                    price: ingredients[i].price
                };
                result.push(container)
            }
        }
        return result;
    }

    render()
    {
        let burger = (
            <Burger
                click={this.onDeleteHandler.bind(this)}
                ingredients={this.state.currentBurger}/>
        );

        let burgerConstructor = (
            <BurgerConstructor
                ingredients={this.state.ingredients}
                price={this.state.price}
                add={this.addIngredientHandler.bind(this)}
                modal={this.toggleModalHandler.bind(this)}
                reset={this.reset.bind(this)} />
        );

        let orderSummary = (
            <OrderSummary
                price={this.state.price}
                fields={this.state.checkout}
                // submit={this.checkoutSubmitHandler.bind(this)}
                cancel={this.toggleModalHandler.bind(this)}
                currentBurger={this.parseIngredients(this.state.currentBurger)} />
        );

        return (
            <Wrap>
                <Loader show={this.state.loading}/>
                {burger}
                <Footer>
                    {burgerConstructor}
                </Footer>
                <Modal
                    toggle={this.toggleModalHandler.bind(this)}
                    open={this.state.modal}>
                        {orderSummary}
                </Modal>
            </Wrap>
        );
    }
}

export default BurgerBuilder;
