import React, { useEffect, useState } from 'react';
import Director from './Director';
import './Directors.css'

const Directors = () => {
    //     https://i.ibb.co/3mhB9s1/shamim.png
    // https://i.ibb.co/b6cyNYv/jasim-sir.png
    // https://i.ibb.co/RcVqsLt/jamil-sir.png
    // https://i.ibb.co/3yX56h3/Bashir-sir.png
    // https://i.ibb.co/wCq7pMq/Nasir-Sir.png
    const [directors, setDirectors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/director')
            .then(res => res.json())
            .then(data => setDirectors(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl mt-10 text-center font-bold'>Board Of Corporate Directors</h1>
            <hr className='w-2/5 my-3 mx-auto border-2' />
            <div>
                {
                    directors.map(director => <Director
                        key={director._id}
                        director={director}
                    ></Director>)
                }
            </div>
        </div>
    );
};

export default Directors;