import React from 'react';
import { useState } from 'react';

const Test = ({count}) => {
    console.log(count)
    
    return (
        <div>
            <h1>Test item</h1>
            <h2>{count.length}</h2>
            <button className='ms-5 py-2 px-2' onClick={count}>+</button>
            <button  className='ms-5 py-2 px-2'>-</button>
        </div>
    );
};

export default Test;