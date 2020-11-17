import React from 'react';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import Pricing from '../../components/Pricing';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFour} />
            <Footer />
            
        </>
    )
}

export default Home
