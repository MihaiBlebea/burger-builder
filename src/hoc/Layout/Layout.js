import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import { Toolbar, Footer, FooterContent } from '../../components/exports.js';

function Layout(props)
{
    return (
        <Wrap>
            <Toolbar />
            <div>{props.children}</div>
            <Footer>
                <FooterContent />
            </Footer>
        </Wrap>
    );
}

export default Layout;
