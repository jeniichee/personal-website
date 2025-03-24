import React, { useState, useEffect } from 'react';

function Typewriter({ text, speed = 100 }) {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {


    }, [text, speed]);

    return <div>{displayText}</div>;

}

export default Typewriter;
