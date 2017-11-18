import React from 'react';
import {
    Offer,
    Footer,
    FooterContent,
    Steps,
    OurStory,
    OurBenefits } from '../../components/exports.js';

function Home()
{
    return (
        <div>
            <Offer />
            <Steps />
            <OurBenefits>Why build your own burger?</OurBenefits>
            <OurStory>Who exactly are we?</OurStory>

            <Footer>
                <FooterContent />
            </Footer>
        </div>
    );
}

export default Home;
