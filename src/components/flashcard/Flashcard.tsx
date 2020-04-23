import React, { Component } from 'react';
import './Flashcard.css';

interface IFlashcardProps {
  typeface: any;
}

export default class Flashcard extends Component<IFlashcardProps> {
  render() {
    const { typeface } = this.props;

    return (
      <div className="FlashCard">
        <img src={typeface.image} className="typeface" alt={typeface.name} />
        <div className="action-area">
          <a href={typeface.url} target="_blank" rel="noopener noreferrer" className="action-area_see-more">See more glyphs</a>
          <a href="/" className="action-area_get-another-one">Get another one</a>
        </div>
      </div>
    );
  }    
}


