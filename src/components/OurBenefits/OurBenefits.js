import React from 'react';
import { Wrap } from '../../hoc/exports.js';
import './OurBenefits.css';

function OurBenefits(props)
{
    let benefits = [
        { title: 'this is the title', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
        { title: 'this is the title', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
        { title: 'this is the title', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
        { title: 'this is the title', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
        { title: 'this is the title', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    ];

    let renderedBenefits = benefits.map((item, index)=> {
        return <li key={index} className='OurBenefitsItem'><strong>{item.title}</strong> - {item.content}</li>
    });

    return (
        <Wrap>
            <h3 className='OurBenefitsTitle'>{props.children}</h3>
            <ul className='OurBenefitsList'>
                {renderedBenefits}
            </ul>
        </Wrap>
    );
}

export default OurBenefits;
