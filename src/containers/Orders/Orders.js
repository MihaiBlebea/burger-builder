import React from 'react';
import axios from '../../axios-orders.js';
import {
    Price,
    Loader,
    Card,
    Message } from '../../components/exports.js';
import { CenterContent } from '../../hoc/exports.js';

class Orders extends React.Component
{
    state = {
        orders: [],
        loading: false,
        message: {
            show: false,
            type: null,
            message: null
        }
    }

    componentDidMount()
    {
        //Check if user came from Checkout
        let comeFromCheckout = this.props.location.state.comeFromCheckout;
        if(comeFromCheckout === true)
        {
            this.setMessage({
                type: 'success',
                message: "Your burger it's on his way now. In max 20 we will be at your door."
            })
        }

        this.setLoading();
        axios.get('/orders.json').then((response)=> {
            if(response.request.status === 200)
            {
                let orders = Object.values(response.data);
                this.setState({
                    orders: orders
                })
            }
            this.removeLoading();
        }).catch((err)=> {
            console.log(err)
            this.removeLoading();
        });
    }

    setMessage(obj)
    {
        this.setState({
            message: {
                show: true,
                message: obj.message,
                type: obj.type
            }
        });

        setTimeout(()=> {
            this.removeMessage();
        }, 5000);
    }

    removeMessage()
    {
        this.setState({
            message: {
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

    render()
    {
        let cards = null;
        if(this.state.orders !== null)
        {
            cards = this.state.orders.map((card, index)=> {
                return <Card
                            key={index}
                            date={card.date}
                            details={{name: card.name, phone: card.phone, email: card.email, address: card.address, price: card.price}}/>
            });
        }

        return (
            <CenterContent>
                <Message
                    show={this.state.message.show}
                    type={this.state.message.type}
                    title={this.state.message.type}>{this.state.message.message}</Message>
                <Loader show={this.state.loading}/>
                <Price>Your orders:</Price>
                { cards }
            </CenterContent>
        );
    }
}

export default Orders;
