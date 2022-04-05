import React from 'react';
import Hero from '../../Hero/Hero';
import Reviews from '../../Reviews/Reviews';

const Home = () => {
    return (
        <main>
            <Hero></Hero>
            <Reviews isAll={false}></Reviews>
        </main>
    );
};

export default Home;