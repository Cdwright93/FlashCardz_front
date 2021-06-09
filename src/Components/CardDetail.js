import React, { Component } from 'react';
import App from '../App'
import './CardDetail.css'


const CardDetail = ({cards,currentCard}) => {
    if(!cards.length > 0){
        return<div>

        </div>
    }
    return (
            <div className='card-detail'>
            <div className='cover'>
            <h4 className="cardfront">{currentCard.front}</h4>
            <h4 className="cardfront">{currentCard.back}</h4>
            </div>
            </div>
      );
    };
    
    export default CardDetail;