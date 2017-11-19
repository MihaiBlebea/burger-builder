import React from 'react';
import './Step.css';

function Step(props)
{
    return (
        <div className='row Step'>
            <div className='col-md-3 col-sm-12 col-xs-12 StepNumber'>
                {props.number}
            </div>
            <div className='col-md-9 col-sm-12 col-xs-12 StepText text-center'>
                <div className='row StepTitle'>
                    {props.title}
                </div>
                <div className='row StepContent'>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Step;
