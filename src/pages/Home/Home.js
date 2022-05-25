import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Review from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;