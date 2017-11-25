import React from 'react';
import update from 'immutability-helper';

import { CheckoutForm, Message } from '../../components/exports.js';
import { CenterContent } from '../../hoc/exports.js';
import * as validate from './validateInput.js';

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
        error: {
            firstName: { show: false, message: false },
            lastName: { show: false, message: false },
            phone: { show: false, message: false },
            email: { show: false, message: false },
            address: { show: false, message: false }
        },
        message: {
            show: false,
            type: null,
            message: null
        }
    }

    sendOrderHandler()
    {
        console.log('order init')
        let ready = this.isReadyToSend();
        if(ready)
        {
            console.log('Send order')
        } else {
            console.log('order not sent')
        }
    }

    isReadyToSend()
    {
        if( this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.phone === '' ||
            this.state.email === '' ||
            this.state.address === '' ||
            this.state.error.firstName.show === true ||
            this.state.error.lastName.show === true ||
            this.state.error.email.show === true ||
            this.state.error.phone.show === true ||
            this.state.error.address.show === true)
        {
            this.setError({
                type: 'error',
                message: 'All checkout fields are required and no errors before placing the order'
            });
            return false;
        } else {
            this.removeError();
            return true;
        }
    }

    setError(obj)
    {
        this.setState({
            message: {
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
            message: {
                show: false
            }
        })
    }

    onUpdateHandler(event)
    {
        let name = event.target.name;
        let value = event.target.value;
        let result;

        switch(name)
        {
            case('firstName'):
                result = validate.validateFirstName(value);
                break;
            case('lastName'):
                result = validate.validateLastName(value);
                break;
            case('email'):
                result = validate.validateEmail(value);
                break;
            case('phone'):
                result = validate.validatePhone(value);
                break;
            case('address'):
                result = validate.validateAddress(value);
                break;
            default:
                console.log('Nothing to validate');
        }
        console.log(result);

        if(result !== true)
        {
            let newState = update(this.state, {
                error: {
                    [name]: {
                        show: {$set: true},
                        message: {$set: result}
                    }
                },
            });
            this.setState(newState);
        } else {
            let newState = update(this.state, {
                error: {
                    [name]: {
                        show: {$set: false},
                        message: {$set: null}
                    }
                },
            });
            this.setState(newState);
        }

        this.setState({
            [name]: value,
        })
    }

    render()
    {
        return (
            <CenterContent>
                <Message
                    show={this.state.message.show}
                    type={this.state.message.type}
                    title={this.state.message.type}>{this.state.message.message}</Message>
                <CheckoutForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    phone={this.state.phone}
                    address={this.state.address}
                    card={this.state.card}
                    error={this.state.error}
                    update={this.onUpdateHandler.bind(this)}
                    send={this.sendOrderHandler.bind(this)}/>
            </CenterContent>
        );
    }
}

export default Checkout;
