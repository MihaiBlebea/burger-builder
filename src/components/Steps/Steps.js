import React from 'react';
import { Step } from '../exports.js';
import './Steps.css';

function Steps()
{
    return (
        <div className="card bg-dark" style={{ borderRadius: 0 }}>
            <div className="card-body">
                <div className='row StepsContainer'>
                    <div className='col-md-4'>
                        <Step
                            number={1}
                            title={'Build'}
                            content={'Make your custom burger'}/>
                    </div>
                    <div className='col-md-4'>
                        <Step
                            number={2}
                            title={'Order'}
                            content={'Fast and easy checkout'}/>
                    </div>
                    <div className='col-md-4'>
                        <Step
                            number={3}
                            title={'Eat'}
                            content={'We deliver in max 20 mins'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;
