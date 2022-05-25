import React from 'react';

const Review = ({ review }) => {
    const { name, img, comment, rating } = review
    return (
        <div class="card w-96 bg-base-100 shadow-xl py-5">
            <figure><img className='w-1/3' src={img} alt="Shoes" /></figure>
            <div class="card-body text-left">
                <h2 class="card-title"><b>Name:</b>{name}</h2>
                <p><b>Rating:</b> {rating}.00</p>
                <p> <b>Comment:</b> {comment}</p>
            </div>
        </div>
    );
};

export default Review;