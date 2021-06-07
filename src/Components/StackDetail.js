import React, { Component } from 'react';
import App from '../App'

const StackDetail = ({ stack, cards }) => {
    if (!stack) {
      return <div>
         <h1>Welcome to Flashcardz</h1>
         <br></br>
         <p style={{fontSize:'25px'}}>Please select any flashcardz set to study.
         </p>
      </div>;
    }
    
    return (
        <div className=".bg-secondary">
          <div className="ui segment">
            <h4 className="ui header">{stack.name}</h4>
            <h5>Number of cards: {cards.length}</h5>
            <p></p>
          </div>
          {/* <div className="comments">
            <CommentForm id={video.id.videoId}/>
          </div> */}
        </div>
      );
    };
    
    export default StackDetail;