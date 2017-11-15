import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Toolbar } from '../exports.js';

function Layout(props)
{
    return (
        <Wrap>
            <div className={'mb-5'}><Toolbar /></div>
            <div>{props.children}</div>
        </Wrap>
    );
}

export default Layout;
