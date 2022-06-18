import React, { useState } from 'react';


const ReaderCount = () => {
    const [ readsCount, setReadsCount ] = useState(0);

    const increaseReadsCount = () => setReadsCount(prevState => prevState + 1);


    return (
        <>
        <p>There have been <span role="figure" id="reads">{readsCount}</span>
        reader(s)!</p>

        {/* Event handling */}
<button aria-label="Read story" onClick={increaseReadsCount}>I've read!</button>
       
        </>
    )
}


export default ReaderCount;
