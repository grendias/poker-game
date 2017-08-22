import React from 'react';
import './PrimaryPlayerControls.css';
import ControlButton from './ControlButton';

const PrimaryPlayerControls = ({ onClick }) => {
    return  <div className="primary-player-controls">
                <ControlButton
                    additionalClass="fold"
                    isActive={true}
                    displayName={"Fold"}
                    id={"FOLD"}
                    onClick={ onClick }  />
                <ControlButton
                    additionalClass="check"
                    isActive={true}
                    displayName={"Check"}
                    id={"CHECK"}
                    onClick={ onClick }  />
                <ControlButton
                    additionalClass="call"
                    isActive={true}
                    displayName={"Call"}
                    id={"CALL"}
                    onClick={ onClick }  />
                <ControlButton
                    additionalClass="raise"
                    isActive={true}
                    displayName={"Raise"}
                    id={"RAISE"}
                    onClick={ onClick }  />
            </div>
};

export default PrimaryPlayerControls;