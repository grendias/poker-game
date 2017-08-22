import React from 'react';
import './PlayerInfo.css';

const PlayerInfo = ({  availableAmount, bettingAction, isInFocus, betAmount}) => {
    return <div className="player-info">
        <div className="player-info_available-amount">{ availableAmount}</div>
        <div className="player-info_betting-info">
            <span className="player-info_betting-info_action">{ 'BET' }</span>
            <span className="player-info_betting-info_amount">{ `£0.00` }</span>
        </div>
    </div>
};

export default PlayerInfo;