import Validator from './validator.class.js';

function validateFirstName(value)
{
    let validate = new Validator();
    let result = validate.check({
        required: true,
        type: 'string',
        length: {
            min: 3,
            max: 25
        },
    }, value);
    return result;
}

function validateLastName(value)
{
    let validate = new Validator();
    let result = validate.check({
        required: true,
        type: 'string',
        length: {
            min: 3,
            max: 25
        },
    }, value);
    return result;
}

function validateEmail(value)
{
    let validate = new Validator();
    let result = validate.check({
        required: true,
        type: 'string',
        length: {
            min: 8,
            max: 50
        },
        contains: ['@']
    }, value);
    return result;
}

function validatePhone(value)
{
    let validate = new Validator();
    let result = validate.check({
        type: 'integer',
        length: {
            min: 8,
            max: 9
        },
    }, value);
    return result;
}

function validateAddress(value)
{
    let validate = new Validator();
    let result = validate.check({
        required: true,
        type: 'string',
        length: {
            min: 10,
            max: 50
        },
    }, value);
    return result;
}

export {
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePhone,
    validateAddress
}
