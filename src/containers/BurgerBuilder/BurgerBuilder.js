import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import {
    Burger,
    BurgerConstructor,
    Message,
    Modal,
    OrderSummary,
    Footer,
    Loader } from '../../components/exports.js';
import axios from '../../axios-orders.js';

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
        error: {
            show: false,
            message: null,
            type: null
        },
        price: 0,
        modal: false,
        loading: false,
        customer: {
            name: 'Serban',
            phone: '0757103898',
            code: 'NW2 1UT'
        }
    }

    componentDidMount()
    {
        axios.get('https://burger-builder-a93a7.firebaseio.com/ingredients.json').then((response)=> {
            console.log(response.data)
            if(response.request.status === 200)
            {
                this.setState({
                    ingredients: response.data
                })
            }
        }).catch((err)=> {
            console.log(err)
        });
    }

    checkoutSubmitHandler()
    {
        console.log('Checkout submitted');
        let payload = {
            name: this.state.customer.name,
            phone: this.state.customer.phone,
            code: this.state.customer.code,
            price: this.state.price
        };
        this.setLoading();

        axios.post('/orders.json', payload).then((response)=> {
            console.log(response.request.status);
            if(response.request.status === 200)
            {
                this.setError({
                    type: 'success',
                    message: 'Your burger is on the way'
                });

                this.toggleModalHandler();
                this.reset();
            }
            this.removeLoading();
        }).catch((err)=> {
            console.log(err);
            this.setError({
                type: 'error',
                message: 'Something went wrong, please checkout again'
            });
            this.removeLoading();
        });
    }

    setError(obj)
    {
        this.setState({
            error: {
                show: true,
                message: obj.message,
                type: obj.type
            }
        });

        setTimeout(()=> {
            this.removeError();
        }, 5000);
    }

    removeError()
    {
        this.setState({
            error: {
                show: false
            }
        })
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
                submit={this.checkoutSubmitHandler.bind(this)}
                cancel={this.toggleModalHandler.bind(this)}
                currentBurger={this.parseIngredients(this.state.currentBurger)} />
        );

        return (
            <Wrap>
                <Loader show={this.state.loading}/>
                <Message
                    show={this.state.error.show}
                    type={this.state.error.type}
                    title={this.state.error.type}>{this.state.error.message}</Message>
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
