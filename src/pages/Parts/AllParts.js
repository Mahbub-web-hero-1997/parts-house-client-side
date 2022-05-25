import React from 'react';

const AllParts = ({ allParts }) => {
    const { name, price, minOrder, available, description, img } = allParts;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className='py-3'><img className='w-3/4 h-52' src={img} alt="Shoes" /></figure>
            <div class="card-body text-left">
                <h2 class="card-title text-3xl">{name}</h2>
                <b><p>Unit Price : ${price}</p>
                    <p>Available Products : {available}</p>
                    <p>Minimum Orders : {minOrder}</p></b>
                <p><b>Description :</b> {description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllParts;