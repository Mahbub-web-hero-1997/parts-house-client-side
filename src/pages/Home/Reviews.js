import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    //     
    // 
    // 
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://nameless-citadel-60846.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center '>Reviews</h1>
            <hr className='w-1/5 mx-auto border-1 mt-4 mb-10' />
            <div className='grid gap-5 sm:grid-cols-1 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;