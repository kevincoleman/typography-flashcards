import React, { Component } from 'react';
import './Flashcard.css';

interface IFlashcardProps {
  typeface: any;
}

interface IFlashcardState {
  showAnswer: boolean;
}

export default class Flashcard extends Component<IFlashcardProps, IFlashcardState> {
  
  constructor(props: IFlashcardProps) {
    super(props);

    this.state = {
      showAnswer: false
    }

    this.revealAnswer = this.revealAnswer.bind(this);
    this.render = this.render.bind(this);
  }

  revealAnswer() {
    this.setState({showAnswer: true});
  }
  
  render() {
    const { typeface } = this.props;
    const { showAnswer } = this.state;

    return (
      <div className="FlashCard">
        <img src={typeface.image} className="typeface" alt={typeface.name} />
        <div className={"answer"} onClick={this.revealAnswer}>
          <span className={showAnswer ? "visible" : ""}>{typeface.name}</span>
        </div>
        <div className="action-area">
          <a href={typeface.url} target="_blank" rel="noopener noreferrer" className="action-area_aabbcc">Aa&nbsp;Bb&nbsp;..</a>
          <a href="/" className="action-area_next">Next</a>
        </div>
      </div>
    );
  }    
}


