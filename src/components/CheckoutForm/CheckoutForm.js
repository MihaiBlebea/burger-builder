import React from 'react';
import CardReactFormContainer from 'card-react';
import { Input, Button } from '../exports.js';
import './card.css';

function CheckoutForm(props)
{
    let formNames = {
        number: 'CCnumber',
        expiry: 'CCexpiry',
        cvc: 'CCcvc',
        name: 'CCname'
    };

    let initValue = {
        number: props.card.number,
        cvc: props.card.cvc,
        expiry: props.card.expire,
        name: props.card.holder
    };

    let classes = {
        valid: 'valid-input',
        invalid: 'invalid-input'
    }

    return (
        <div className='row'>
            <div className='col-md-6'>
                <h4>Your information</h4>
                <Input
                    label='First Name'
                    type='text'
                    name='firstName'
                    errorMessage='Please check the input'
                    value={props.firstName}
                    error={true}
                    update={props.firstNameUpdate} />
                <Input
                    label='Last Name'
                    type='text'
                    name='lastName'
                    errorMessage='Please check the input'
                    value={props.lastName}
                    error={true}
                    update={props.firstNameUpdate} />
                <Input
                    label='Email'
                    type='text'
                    name='email'
                    errorMessage='Please check the input'
                    value={props.email}
                    error={true}
                    update={props.firstNameUpdate} />
                <Input
                    label='Phone'
                    type='text'
                    name='phone'
                    errorMessage='Please check the input'
                    value={props.phone}
                    error={true}
                    update={props.firstNameUpdate} />
                <Input
                    label='Address'
                    type='text'
                    name='address'
                    errorMessage='Please check the input'
                    value={props.address}
                    error={true}
                    update={props.firstNameUpdate} />
            </div>

            <div className='col-md-6'>
                <h4>Payment information</h4>

                <CardReactFormContainer
                    container="card-wrapper"
                    formInputsNames={formNames}
                    initialValues={initValue}
                    classes={classes}
                    formatting={true}>
                        <div id="card-wrapper" className='mb-3' style={{maxWidth: 350 + 'px', margin: 'auto'}}></div>
                        <input className='form-control mb-2' placeholder="Card holder" type="text" name="CCname" />
                        <input className='form-control mb-2' placeholder="Card number" type="text" name="CCnumber" />
                        <input className='form-control mb-2' placeholder="MM/YY" type="text" name="CCexpiry" />
                        <input className='form-control mb-2' placeholder="CVC" type="text" name="CCcvc" />
                </CardReactFormContainer>
                <div className='mt-4'>
                    <Button
                        type='success'
                        size='large'
                        click={alert.bind('buy')}>Place Order</Button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
