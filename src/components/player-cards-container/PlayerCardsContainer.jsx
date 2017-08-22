import React, { Component }  from 'react';
import './PlayerCardsContainer.css';
import CardHolder from '../card-holder/CardHolder';
import PlayerInfo from './PlayerInfo';

const cards = [
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/2_of_clubs.png',
    },
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/2_of_clubs.png',
    }
];

class PlayerCardsContainer extends Component {

    render() {
        return <div className="player-cards-container">
            <div>Username</div>
            <CardHolder cards={ cards } />
            <PlayerInfo />
        </div>
    }
};

export default PlayerCardsContainer;