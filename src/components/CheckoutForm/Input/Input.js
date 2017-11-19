import React from 'react';
import './Input.css';

function Input(props)
{
    console.log(props.error)
    let error = (
        <small className="form-text InputError">{props.errorMessage}</small>
    );

    let classes = ['form-control'];

    if(props.error)
    {
        classes.push('is-invalid');
    }

    return (
        <div className="form-group">
            <label>{props.label}:</label>
            <input
                name={props.name}
                type={props.type}
                className={classes.join(' ')} />
            { (props.error) ? error : null }
        </div>
    );
}

export default Input;
