import React, { useState } from 'react';

const FaveButton = () => {
    const [ faved, setFaved ] = useState(false);

    const handleFave = e => {
        e.stopPropagation()
        setFaved(!faved)
    }

    return (
        <span role="switch" onClick={handleFave} style={{ color: faved ? 'gold' : 'grey' }}>★</span>
    );
}

export default FaveButton;
