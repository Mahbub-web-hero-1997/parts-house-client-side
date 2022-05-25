import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        < div>
            <h1>This is Tools {tools.length}</h1>
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