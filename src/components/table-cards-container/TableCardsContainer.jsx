import React, { Component }  from 'react';
import './TableCardsContainer.css';
import CardHolder from '../card-holder/CardHolder';
import BettingInfo from './BettingInfo';

const cards = [
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/3_of_clubs.png',
    },
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/3_of_clubs.png',
    },
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/3_of_clubs.png',
    },
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/3_of_clubs.png',
    },
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/3_of_clubs.png',
    }
];

class TableCardsContainer extends Component {

    render() {
        return <div className="table-cards-container">
            <CardHolder cards={ cards } />
            <BettingInfo />
        </div>
    }
};

export default TableCardsContainer;