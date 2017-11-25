import React from 'react'
import './Price.css';

function Price(props)
{
    let styles = {
        fontSize: props.size + 'em'
    }

    return (
        <h4 className='Price' style={styles}>{props.children}</h4>
    );
}

export default Price;
