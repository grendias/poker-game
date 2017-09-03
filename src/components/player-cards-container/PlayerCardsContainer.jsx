import React, { Component }  from 'react';
import './PlayerCardsContainer.css';
import CardHolder from '../card-holder/CardHolder';
import PlayerInfo from './PlayerInfo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {

    }
};

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
            <div className="player-cards-container_username">Username</div>
            <div className="player-cards-container_amount">£1000</div>
            <CardHolder cards={ cards } />
            <PlayerInfo />
        </div>
    }
};

export default connect(mapStateToProps)(PlayerCardsContainer);