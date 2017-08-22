import React from 'react';
import './BettingControls.css';
import ControlButton from './ControlButton';
import StepInput from './StepInput';

const BettingControls = ({ onClick, amount }) => {
    return  <div className="betting-controls">
        <ControlButton
            additionalClass="allIn"
            isActive={true}
            displayName={"All In"}
            id={"ALLIN"}
            onClick={ onClick }  />
        <ControlButton
            additionalClass="bet"
            isActive={true}
            displayName={"Bet"}
            id={"BET"}
            onClick={ onClick }  />
        <StepInput maxAmount={ amount } />
    </div>
};

export default BettingControls;