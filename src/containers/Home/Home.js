import React from 'react';
import {
    Offer,
    Steps,
    OurStory,
    OurBenefits,
    Title} from '../../components/exports.js';
import { CenterContent } from '../../hoc/exports.js';

function Home()
{
    return (
        <div>
            <Offer />
            <Steps />

            <CenterContent>
                <OurBenefits>
                    <Title type='small'>Why build your own burger?</Title>
                </OurBenefits>
            </CenterContent>

            <CenterContent>
                <OurStory>
                    <Title type='small'>Who exactly are we?</Title>
                </OurStory>
            </CenterContent>
        </div>
    );
}

export default Home;
