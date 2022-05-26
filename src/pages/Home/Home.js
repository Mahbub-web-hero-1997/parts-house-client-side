import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Directors from './Directors';
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
            <Directors></Directors>
        </div>
    );
};

export default Home;