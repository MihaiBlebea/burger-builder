import React from 'react';
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

    let renderedBenefits = benefits.map((item)=> {
        return <li className='OurBenefitsItem'><strong>{item.title}</strong> - {item.content}</li>
    });

    return (
        <div className='OurBenefits'>
            <h3 className='OurBenefitsTitle'>{props.children}</h3>
            <ul className='OurBenefitsList'>
                {renderedBenefits}
            </ul>
        </div>
    );
}

export default OurBenefits;
