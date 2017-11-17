import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Toolbar } from '../../components/exports.js';

function Layout(props)
{
    return (
        <Wrap>
            <Toolbar />
            <div>{props.children}</div>
        </Wrap>
    );
}

export default Layout;
