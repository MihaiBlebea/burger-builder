import React from 'react';
import './Step.css';

function Step(props)
{
    return (
        <div className='row Step'>
            <div className='col-md-3 col-sm-3 col-xs-3 StepNumber'>
                {props.number}
            </div>
            <div className='col-md-9 col-sm-9 col-xs-9 StepText'>
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
