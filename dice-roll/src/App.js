import React, { Component } from 'react'
import './App.css'
import DiceRoll from './DiceRoll.js';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <DiceRoll/>
      </div>
    )
  }
}

export default App

