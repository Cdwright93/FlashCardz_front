import React, { Component } from 'react';
import App from '../App'
import CardDetail from './CardDetail'
import './StackDetail.css'


const StackDetail = ({ stack, cards, currentCard }) => {
    if (!stack) {
      return <div className='welcome-ui'>
         <h1>Welcome to Flashcardz</h1>
         <br></br>
         <p style={{fontSize:'25px'}}>Please select any flashcardz set to study.
         </p>
      </div>;
    }
    
    return (
      <div>
          <div className="ui-segment">
            <h4 className="ui-header">{stack.name}</h4>
            <h5>Number of cards: {cards.length}</h5>
          </div>
          <div className='ui-card-detail'>
        <CardDetail cards={cards} currentCard={currentCard}/>
          </div>
          </div>
      );
    };
    
    export default StackDetail;