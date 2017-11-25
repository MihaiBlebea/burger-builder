import React from 'react';
import CardReactFormContainer from 'card-react';
import { Input, Button, Title, Price } from '../exports.js';
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
                <Title type='small'>Client information:</Title>
                <Input
                    label='First Name'
                    type='text'
                    name='firstName'
                    errorMessage={props.error.firstName.message}
                    value={props.firstName}
                    error={props.error.firstName.show}
                    update={props.update} />
                <Input
                    label='Last Name'
                    type='text'
                    name='lastName'
                    errorMessage={props.error.lastName.message}
                    value={props.lastName}
                    error={props.error.lastName.show}
                    update={props.update} />
                <Input
                    label='Email'
                    type='text'
                    name='email'
                    errorMessage={props.error.email.message}
                    value={props.email}
                    error={props.error.email.show}
                    update={props.update} />
                <Input
                    label='Phone'
                    type='text'
                    name='phone'
                    errorMessage={props.error.phone.message}
                    value={props.phone}
                    error={props.error.phone.show}
                    update={props.update} />
                <Input
                    label='Address'
                    type='text'
                    name='address'
                    errorMessage={props.error.address.message}
                    value={props.address}
                    error={props.error.address.show}
                    update={props.update} />
            </div>

            <div className='col-md-6'>
                <Title type='small'>Payment information:</Title>
                <Price>Pay just {props.price}£</Price>
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
                        click={props.send.bind(this)}>Place Order</Button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
