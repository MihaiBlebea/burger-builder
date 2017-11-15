import React from 'react';

function Button(props)
{
    let style = {
        button: {
            margin: (props.margin) ? props.margin + 'px' : 'auto',
            display: 'block',
            cursor: 'pointer',
            textTransform: 'capitalize'
        }
    }

    let classes = ['btn'];

    switch(props.type)
    {
        case('primary'):
            classes.push('btn-primary');
            break;
        case('success'):
            classes.push('btn-success');
            break;
        case('danger'):
            classes.push('btn-danger');
            break;
        default:
            classes.push('btn-primary');
    }

    return (
        <button
            type='button'
            onClick={props.click.bind(this)}
            style={style.button}
            disabled={props.disabled}
            className={classes.join(' ')}>{props.children}</button>
    );
}

export default Button;
