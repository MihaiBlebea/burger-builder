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

    return (
        <div className={classes.join(' ')}>
            <strong>{props.title}</strong> {props.children}
        </div>
    );
}

export default Message;
