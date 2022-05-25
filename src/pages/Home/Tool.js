import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, price, minOrder, available, description, img } = tool;
    const navigate = useNavigate()
    const handlePurchase = id => {
        const url = `http://localhost:5000/product${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure className='py-3'><img className='w-3/4 h-52' src={img} alt="Shoes" /></figure>
            <div class="card-body text-left">
                <h2 class="card-title text-3xl">{name}</h2>
                <b><p>Unit Price : ${price}</p>
                    <p>Available Products : {available}</p>
                    <p>Minimum Orders : {minOrder} pcs</p></b>
                <p><b>Description :</b> {description}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => handlePurchase(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;