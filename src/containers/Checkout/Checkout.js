import React from 'react';
import { CheckoutForm } from '../../components/exports.js';
import { CenterContent } from '../../hoc/exports.js';
import Validate from './validate.js';

class Checkout extends React.Component
{
    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        card: {
            holder: 'Serban Mihai Blebea',
            number: '4111111111111111',
            expire: '12/18',
            cvc: '123'
        },
        error: true
    }

    onUpdateHandler(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        let validate = new Validate();
        let valid = validate.check({
            type: 'string',
            length: {
                max: 3,
                min: 0
            },
            contains: ['@']
        }, value);

        console.log(valid, validate.withMessage());

        this.setState({
            [name]: value
        });
    }

    render()
    {
        return (
            <CenterContent>
                <CheckoutForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    phone={this.state.phone}
                    address={this.state.address}
                    card={this.state.card}
                    error={this.state.error}
                    firstNameUpdate={this.onUpdateHandler.bind(this)}/>
            </CenterContent>
        );
    }
}

export default Checkout;
