import React from 'react';
import './TypeText.css';
import Typed from 'typed.js';

class TypeText extends React.Component
{
    componentDidMount()
    {
        const { strings } = this.props;
        const options = {
        	strings: strings,
            typeSpeed: 50,
            fadeOut: true,
            backDelay: 2500,
            fadeOutDelay: 500,
            loop: true,
            loopCount: Infinity,
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount()
    {
        this.typed.destroy();
    }

    render()
    {
        return (
            <div className="type-wrap">
                <span
                    style={{ whiteSpace: 'pre' }}
                    ref={(el) => { this.el = el; }}/>
            </div>
        );
    }
}

export default TypeText;
