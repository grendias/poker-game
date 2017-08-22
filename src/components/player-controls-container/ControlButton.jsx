import React from 'react';
import './ControlButton.css';

const ControlButton = ({ isActive, displayName, id, onClick, additionalClass }) => {
    return <div className={isActive ? `control-button --isActive ${additionalClass}` : `control-button ${additionalClass}` }>
        <button onClick={ onClick.bind(this, id) }>{ displayName }</button>
    </div>
};

export default ControlButton;