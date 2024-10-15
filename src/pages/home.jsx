import Hero from '../components/hero/Hero';
import Deals from '../components/deals/Deals';
import React from 'react';

function Home({updateCount}){
    return (
        <>
            <Hero/>
            <Deals updateCount = {updateCount}/>
        </>
    );
}

export default Home;