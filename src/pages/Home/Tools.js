import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://nameless-citadel-60846.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        < div>
            <h1 className='text-3xl font-bold mb-3'>Our Available Tools</h1>
            <hr className='w-1/3 mb-10 shadow-2xl mx-auto' />
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0, 6).map(tool => <Tool
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div >
    );
};

export default Tools;