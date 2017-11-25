import React from 'react';
import axios from '../../axios-orders.js';
import { Price } from '../../components/exports.js';
import { CenterContent } from '../../hoc/exports.js';

class Orders extends React.Component
{
    state = {
        orders: null
    }

    componentDidMount()
    {
        console.log('component did load')
        axios.get('/orders.json').then((response)=> {
            if(response.request.status === 200)
            {
            let orders = Object.values(response.data);
                this.setState({
                    orders: orders
                })
            }
        }).catch((err)=> {
            console.log(err)
        });
    }

    render()
    {
        return (
            <CenterContent>
                <Price>Your orders:</Price>
            </CenterContent>
        );
    }
}

export default Orders;
