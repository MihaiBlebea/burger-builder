import React from 'react';

function Message(props)
{
    let classes = ['alert'];

    switch(props.type)
    {
        case('success'):
            classes.push('alert-success');
            break;
        case('error'):
            classes.push('alert-warning');
            break;
        default:
            classes.push('alert-info');
    }

    let message = (
        <div className={classes.join(' ')} style={{ maxWidth: 90 + '%', margin: 'auto' }}>
            <strong style={{ textTransform: 'capitalize' }}>{props.title}!</strong> {props.children}
        </div>
    )

    return (props.show) ? message : null;
}

export default Message;
