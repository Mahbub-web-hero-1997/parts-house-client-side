import React from 'react';
import ButtonPrimary from '../Shared/ButtonPrimary';
// import img from '../../Images/images/chair.png'

// import backgroundImg from '../../Images/images/bg.png'

const Banner = () => {
    return (
        <div>
            <div style={{
                // background: `url(${backgroundImg})`

            }} className="hero min-h-screen " >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='https://img.freepik.com/free-vector/industrial-augmented-reality-isometric-composition_1284-29750.jpg?t=st=1653370538~exp=1653371138~hmac=4031be324466d80dc88d53e06622bb7ed36c262ce1d13579b4ba67fc55dd03e8&w=740' alt='' className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div className='sm:w-full text-left '>
                        <h1 className=" text-5xl font-bold">PARTS PLUS CAR CARE CENTER PROGRAM</h1>
                        <p className="py-6 ">The Parts Plus Car Care Center program is a Robust Nationwide Warranty and Marketing program designed for service centers to help grow their businesses. With over 28 different features and benefits, this program has something for everyone to take advantage of.</p>
                        <ButtonPrimary>Get-Started</ButtonPrimary>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Banner;