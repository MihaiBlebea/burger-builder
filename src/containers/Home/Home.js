import React from 'react';
import {
    Offer,
    Steps,
    OurStory,
    OurBenefits } from '../../components/exports.js';
import { CenterContent } from '../../hoc/exports.js';

function Home()
{
    return (
        <div>
            <Offer />
            <Steps />

            <CenterContent>
                <OurBenefits>Why build your own burger?</OurBenefits>
            </CenterContent>

            <CenterContent>
                <OurStory>Who exactly are we?</OurStory>
            </CenterContent>
        </div>
    );
}

export default Home;
