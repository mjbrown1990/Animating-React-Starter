import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';

const items = [0, 1, 2, 3, 4];

const Boxes = () => {
    const [isVisible, toggleVisibility] = useState(false);

    const trail = useTrail(items.length, {
        opacity: isVisible ? 0 : 1,
        transform: isVisible ? 'scale(0.3)' : 'scale(1)'
    });

    return (
        <div className="boxes-grid">
            <button onClick={() => toggleVisibility(!isVisible) }>Toggle</button>
            {trail.map(animation => <animated.div className="box" style={animation} /> )}
        </div>
    )
}

export default Boxes;
