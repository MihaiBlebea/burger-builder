import React from 'react';
import { Wrap } from '../../hoc/exports.js';

class BurgerBuilder extends React.Component
{
    render()
    {
        return (
            <Wrap>
                <div>Builder</div>
                <div>Controller</div>
            </Wrap>
        );
    }
}

export default BurgerBuilder;
