import React from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';


const Gesture = () => {
    const [{ x }, set] = useSpring(() => ({
        x: 0
    }));

    const bind = useGesture(({ down, delta }) => {
        //Set animation
        set({ x: down ? delta[0] :0 });
    });

    return (
        <animated.div
            className="box"
            {...bind()}
            style={{
                transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
                opacity: x.interpolate({
                    map: Math.abs,
                    range: [-0, 400],
                    output: [1, 0]
                })
            }}
        />
    )
}

export default Gesture;
