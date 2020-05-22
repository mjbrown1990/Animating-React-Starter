import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';

const Modal = ({ closeModal, animation, pointerEvents }) => {
    return (
        <div className="modal" style={{ pointerEvents }}>
            <animated.div className="modal-card" style={animation}>
                <h1>Modal</h1>
                <button onClick={closeModal}>Close</button>
            </animated.div>
        </div>
    )
}

const ModalWrapper = () => {
    const [isVisible, toggleVisible] = useState(false);

    const transition = useTransition(isVisible, null, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)'},
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)'},
        leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)'},
    });

    const pointerEvents = isVisible ? 'all' : 'none';

    return (
        <div>
            {transition.map(({ item: triggerAnimation, key, props: animation }) =>
                triggerAnimation && <Modal key={key} animation={animation} pointerEvents={pointerEvents} closeModal={() => toggleVisible(false) } />
            )}
            <button onClick={() => toggleVisible(!isVisible)}>Open</button>
        </div>
    )
}

export default ModalWrapper;
