import React from 'react';
import Reviews from './Reviews';
import About from '../About';
import Issue from './Issue';
import { useEffect } from 'react';


function HomePage() {
    return ( 
        <>
        <Issue/>
        <About/>
        <Reviews/>
        </>
     );
}

export default HomePage;