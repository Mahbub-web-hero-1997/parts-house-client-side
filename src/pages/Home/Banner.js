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
                    <div className='w-1/2 text-left'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6 w-3/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <ButtonPrimary>Get-Started</ButtonPrimary>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Banner;