import React, { Component }  from 'react';
import './PlayerControlsContainer.css';
import PrimaryPlayerControls from './PrimaryPlayerControls';
import BettingControls from './BettingControls';


class PlayerControlsContainer extends Component {

    onClick(id) {
        alert(id);
    }

    render() {
        return <div className="player-controls-container">
            <PrimaryPlayerControls onClick={ this.onClick } />
            <BettingControls onClick={ this.onClick } amount={ 101.00 }/>
        </div>
    }
};

export default PlayerControlsContainer;