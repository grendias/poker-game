import React from 'react';
import './Table.css';
import PlayerCardsContainer from '../player-cards-container/PlayerCardsContainer';
import PlayerControlsContainer from '../player-controls-container/PlayerControlsContainer';
import TableCardsContainer from '../table-cards-container//TableCardsContainer';
import CardHolder from '../card-holder/CardHolder';

const cards = [
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/2_of_clubs.png',
    },
    {
        imgAddress: 'http://localhost:3000/Poker-Cards/2_of_clubs.png',
    }
];

const Table = ({ players }) => {
    return <div className="table">
        <div className="table_top">
            <PlayerCardsContainer/>
            <PlayerCardsContainer/>
            <PlayerCardsContainer/>
            <PlayerCardsContainer/>
            <PlayerCardsContainer/>
        </div>
        <div className="table_middle">
            <PlayerCardsContainer/>
            <TableCardsContainer/>
            <PlayerCardsContainer/>
        </div>
        <div className="table_bottom">
            <div className="table_player">
                <PlayerControlsContainer/>
                <CardHolder cards={cards} />
            </div>
        </div>


    </div>
};

export default Table;