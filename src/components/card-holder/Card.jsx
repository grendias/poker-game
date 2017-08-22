import React from 'react';
import './Card.css';

const Card = ({ imgAddress }) => {
    return <div className="card">
        <img
            className="card_img --back-facing"
            src={imgAddress}/>
    </div>
};

export default Card;