import React from 'react';
import './Input.css';

function Input(props)
{
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
                className={classes.join(' ')}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.update}/>
            {(props.error) ? error : null}
        </div>
    );
}

export default Input;
