import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Reviews from './Reviews';
import About from '../About';
import Qna from './Qna';
import Issue from './Issue';
import Feeling from './Feeling';


function HomePage() {
    return ( 
        <>
        <Hero/>
        <Stats/>
        <Issue/>
        <Feeling/>
        <Reviews/>
        <About/>
        <Qna/>
        </>
     );
}

export default HomePage;