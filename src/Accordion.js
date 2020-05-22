import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from './useMeasure';

const Accordion = () => {
    const [isVisible, toggle] = useState(false);

    const [ref, { height, top:paddingTop }] = useMeasure();
    console.log(ref, height, paddingTop, isVisible);

    const animation = useSpring({
        overflow: 'hidden',
        height: isVisible ? height + (paddingTop * 2) : 0,
    });

    return (
        <div>
            <button onClick={() => toggle(!isVisible) }>Toggle Accordion</button>

            <animated.div style={animation}>
                <div ref={ref} className="accordion">
                    <p>Hello World!</p>
                </div>
            </animated.div>
        </div>
    )
}

export default Accordion;
