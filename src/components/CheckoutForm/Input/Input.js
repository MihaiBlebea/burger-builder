import React from 'react';
import './Input.css';

function Input(props)
{
    let classes = ['form-control'];
    let errorMessages = null;

    if(props.error)
    {
        classes.push('is-invalid');
        errorMessages = props.errorMessage.map((message, index)=> {
            return <small key={index} className="form-text InputError">{index + 1}. {message}</small>
        });
    }

    return (
        <div className="form-group">
            <label>{props.label}:</label>
            <input
                className={classes.join(' ')}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.update}/>
            { errorMessages }
        </div>
    );
}

export default Input;
