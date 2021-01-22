import React, { Component } from 'react'
import Dice from './Dice.js';
import './DiceRoll.css';

export class DiceRoll extends Component {

    static defaultProps = {
        faces : ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props){
        super(props);
        this.state = {die1 : "one", die2 : "one"};
        this.roll = this.roll.bind(this);
    }

    roll(){
        // Shuffle for die one
        const newDie1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];

        // Shuffle for die two
        const newDie2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        
        this.setState({die1:newDie1,die2:newDie2})
    }

    render() {
        return (
            <div className="DiceRoll">
                <div className="DiceRoll-container">
                    <Dice face={this.state.die1}/>
                    <Dice face={this.state.die2}/>
                </div>
                <button onClick={this.roll}>Roll!</button>
            </div>
        )
    }
}

export default DiceRoll
