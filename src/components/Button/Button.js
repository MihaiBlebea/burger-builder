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

    switch(props.size)
    {
        case('large'):
            classes.push('btn-lg');
            break;
        case('medium'):
            classes.push('btn-md');
            break;
        case('small'):
            classes.push('btn-sm');
            break;
        default:
            classes.push('btn-md');
    }

    return (
        <button
            type='button'
            onClick={(props.click) ? props.click.bind(this) : null}
            style={style.button}
            disabled={props.disabled}
            className={classes.join(' ')}>{props.children}</button>
    );
}

export default Button;
