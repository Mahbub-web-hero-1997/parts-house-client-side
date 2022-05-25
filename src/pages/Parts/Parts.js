import React, { useEffect, useState } from 'react';
import AllParts from './AllParts';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-10'>
            <h1>All-Available-Parts</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5  '>
                {
                    parts.map(allParts => <AllParts
                        allParts={allParts}
                    ></AllParts>)
                }
            </div>
        </div>
    );
};

export default Parts;