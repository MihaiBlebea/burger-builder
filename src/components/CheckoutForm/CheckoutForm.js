import React from 'react';
import CardReactFormContainer from 'card-react';
import { Input, Button } from '../exports.js';
import './card.css';

function CheckoutForm()
{
    return (
        <div className='row'>
            <div className='col-md-6'>
                <h4>Your information</h4>
                <Input
                    label='First Name'
                    type='text'
                    errorMessage='Please check the input'
                    error={true} />
                <Input
                    label='Last Name'
                    type='text'
                    errorMessage='Please check the input'
                    error={true} />
                <Input
                    label='Email'
                    type='text'
                    errorMessage='Please check the input'
                    error={true} />
                <Input
                    label='Phone'
                    type='text'
                    errorMessage='Please check the input'
                    error={true} />
                <Input
                    label='Address'
                    type='text'
                    errorMessage='Please check the input'
                    error={true} />
            </div>

            <div className='col-md-6'>
                <h4>Payment information</h4>

                <CardReactFormContainer
                    container="card-wrapper"
                    formInputsNames={
                        {
                            number: 'CCnumber', // optional — default "number"
                            expiry: 'CCexpiry',// optional — default "expiry"
                            cvc: 'CCcvc', // optional — default "cvc"
                            name: 'CCname' // optional - default "name"
                        }
                    }

                    // initialValues= {
                    //     {
                    //         number: '4111 1111 1111 1111', // optional — default •••• •••• •••• ••••
                    //         cvc: '123', // optional — default •••
                    //         expiry: '16/12', // optional — default ••/••
                    //         name: 'Random Name' // optional — default FULL NAME
                    //     }
                    // }
                    classes={
                        {
                            valid: 'valid-input', // optional — default 'jp-card-valid'
                            invalid: 'invalid-input' // optional — default 'jp-card-invalid'
                        }
                    }
                    formatting={true}>
                        <div id="card-wrapper" className='mb-3'></div>

                        <input className='form-control mb-2' placeholder="Full name" type="text" name="CCname" />
                        <input className='form-control mb-2' placeholder="Card number" type="text" name="CCnumber" />
                        <input className='form-control mb-2' placeholder="MM/YY" type="text" name="CCexpiry" />
                        <input className='form-control mb-2' placeholder="CVC" type="text" name="CCcvc" />

                </CardReactFormContainer>

                <Button
                    type='success'
                    size='large'
                    click={alert.bind('buy')}>Place Order</Button>
            </div>
        </div>
    );
}

export default CheckoutForm;
