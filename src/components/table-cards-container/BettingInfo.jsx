import React from 'react';
import './BettingInfo.css';

const BettingInfo = ({ potAmount, lastBetUsername }) => {
    return <div className="betting-info">
        <div className="betting-info_pot">{ `The Pot: ${potAmount}`}</div>
        <div className="betting-info_last-bet-username">{ `Last Bet By: ${lastBetUsername}`}</div>
    </div>
};

export default BettingInfo;