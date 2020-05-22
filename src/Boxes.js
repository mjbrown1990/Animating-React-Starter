import React, { useState, useRef } from 'react';
import { animated, useTrail, useSpring, useChain, useTransition } from 'react-spring';

const items = [0, 1, 2, 3, 4];

const Boxes = () => {
    const [isVisible, toggleVisibility] = useState(false);

    const springRef = useRef();
    const transitionRef = useRef();

    //With Trail
    // const trail = useTrail(items.length, {
    //     ref: transitionRef,
    //     from: {
    //         opacity: 0,
    //         scale: 0,
    //     },
    //     to: {
    //         opacity: isVisible ? 1 : 0,
    //         transform: isVisible ? 'scale(1)' : 'scale(0)'
    //     }
    // });

    //With transition
    const transition = useTransition(isVisible ? items : [], item => item, {
        ref: transitionRef,
        trail: 500,//0.5 second delay before the next item transitions
        from: {
            opacity: 0,
            scale: 0,
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)'
        },
        leave: {
            opacity: 0,
            transform: 'scale(0)'
        }
    });

    const { size } = useSpring({
        ref: springRef,
        from: { size: '20%' },
        to: { size: isVisible ? '100%' : '20%' }
    });

    useChain(isVisible ? [springRef, transitionRef] : [transitionRef, springRef]);

    return (
        <div className="full-height">
            <animated.div
                className="boxes-grid-two"
                style={{
                    width: size,
                    height: size
                }}
                onClick={() => toggleVisibility(!isVisible) }
            >
                {/* {trail.map(animation =>
                    <animated.div className="box-two" style={animation} />
                )} */}
                {transition.map(({ item: triggerAnimation, key, props: animation }) =>
                    <animated.div className="box-two" key={key} style={animation} />
                )}
            </animated.div>
        </div>
    )
}

export default Boxes;
