import React from 'react';
import { Wrap } from '../../hoc/exports.js';


function Layout(props)
{
    return (
        <Wrap>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <div>{props.children}</div>
        </Wrap>
    );
}

export default Layout;
