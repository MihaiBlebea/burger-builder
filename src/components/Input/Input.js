import React from 'react';
import { Wrap } from '../../hoc/exports.js';

function Input(props)
{
    return (
        <Wrap>
            <div className="form-group">
                <label>{props.label}</label>
                <input
                    type={props.type}
                    className="form-control"/>
            </div>
        </Wrap>
    );
}

export default Input;
