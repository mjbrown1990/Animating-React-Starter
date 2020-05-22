import React from 'react';
import { animated, useSprings } from 'react-spring';

const opacities = [0.2, 0.4, 0.6, 0.8, 1];

const Boxes = () => {
    const springs = useSprings(opacities.length, opacities.map(opacity => ({
            from: {
                opacity: 0,
            },
            to: {
                opacity: opacity
            }
        }))
    );

    return (
        <div className="boxes-grid">
            {springs.map(animation => <animated.div className="box" style={animation} /> )}
        </div>
    )
}

export default Boxes;
