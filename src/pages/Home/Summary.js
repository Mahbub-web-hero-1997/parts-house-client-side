import React from 'react';
import { FaFlag, FaIndustry, FaUsers, FaComments } from 'react-icons/fa';


const Summary = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl text-primary font-bold'>Our Business Partner!</h1>
            <hr className=' w-1/2 my-5 bg-primary mx-auto ' />
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
                <div className="bg-accent text-white py-8 rounded-lg shadow-2xl">
                    <FaFlag className='text-center mx-auto text-6xl text-white my-5' />
                    <h1 className='text-3xl font-bold'>50</h1>
                    <h1 className='text-2xl font-bold mt-3'>Countries</h1>
                </div>
                <div className="bg-accent text-white py-8 rounded-lg shadow-2xl ">
                    <FaIndustry className='text-center mx-auto text-6xl text-white my-5' />
                    <h1 className='text-3xl font-bold'>1500+</h1>
                    <h1 className='text-2xl font-bold mt-3'>Compleat Project</h1>
                </div>
                <div className="bg-accent text-white py-8 rounded-lg shadow-2xl ">
                    <FaComments className='text-center mx-auto text-6xl text-white my-5' />
                    <h1 className='text-3xl font-bold'>1200+</h1>
                    <h1 className='text-2xl font-bold mt-3'>Reviews</h1>
                </div>
                <div className="bg-accent text-white py-8 rounded-lg shadow-2xl ">
                    <FaUsers className='text-center mx-auto text-6xl text-white my-5' />
                    <h1 className='text-3xl font-bold'>1500+</h1>
                    <h1 className='text-2xl font-bold mt-3'>FeedBack</h1>
                </div>



            </div>
        </div>
    );
};

export default Summary;