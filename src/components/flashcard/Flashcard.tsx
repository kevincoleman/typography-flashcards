import React, { Component } from 'react';
import './Flashcard.css';
import flashcards from "./flashcards";

interface IFlashcardProps { }

interface IFlashcardState {
  typeface: ITypeface;
  showAnswer: boolean;
}

interface ITypeface {
  name: string,
  image: string,
  url: string
}

export default class Flashcard extends Component<IFlashcardProps, IFlashcardState> {
  
  state = {
    typeface: {
      name: "",
      image: "",
      url: ""
    },
    showAnswer: false
  }

  componentDidMount() {
    this.setState({typeface: this.getNewTypeface()});
  }

  getNewTypeface = () => {
    const currentTypeface = this.state.typeface;
    const newTypeface = flashcards[Math.floor(Math.random() * flashcards.length)];
    if (currentTypeface === newTypeface) { this.getNewTypeface(); }
    return newTypeface;
  }

  onNextTypeface = () => {
    this.setState({typeface: this.getNewTypeface(), showAnswer: false});
  }

  onShowAnswer = () => {
    this.setState({showAnswer: true});
  }

  render() {
    const { typeface, showAnswer } = this.state;

    return (
      <div className="FlashCard">
        <div className="typeface">
          <img src={typeface.image} className="typeface_image" alt={typeface.name} />
        </div>
        <div className="answer" onClick={this.onShowAnswer}>
          <span className={showAnswer ? "visible" : ""}>{typeface.name}</span>
        </div>
        <div className="action-area">
          <a href={typeface.url} target="_blank" rel="noopener noreferrer" className="action-area_aabb">Aa&nbsp;Bb&nbsp;..</a>
          <button onClick={this.onNextTypeface} className="action-area_next">Next</button>
        </div>
      </div>
    );
  }    
}


