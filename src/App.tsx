import React, { Component } from 'react';
import Flashcard from  './components/flashcard/Flashcard';
import './App.css';

import flashcards from "./data/flashcards";



export default class App extends Component {
  
  getRandomTypeface(): any {
    return flashcards[Math.floor(Math.random() * flashcards.length)];
  }

  render() {
    return (
      <div className="App">
        <Flashcard
          typeface={this.getRandomTypeface()}
        />
      </div>
    );
  }

}
