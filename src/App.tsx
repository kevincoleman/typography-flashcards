import React, { Component } from 'react';
import Flashcard from  './components/flashcard/Flashcard';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Flashcard />
      </div>
    );
  }

}
