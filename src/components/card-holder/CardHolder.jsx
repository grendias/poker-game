import React from 'react';
import './CardHolder.css';
import Card from './Card';

const CardHolder = ({ cards }) => {
    return <div className="card-holder">
        <ul className="card-holder_list">
            {
                cards.map(({ imgAddress }) => {
                    const component = imgAddress ? <Card imgAddress={ imgAddress } /> : <div className="blank" />;
                    return <li className="card-holder_list_item">
                        {
                            component
                        }

                    </li>
                })
            }
        </ul>
    </div>
};

export default CardHolder;