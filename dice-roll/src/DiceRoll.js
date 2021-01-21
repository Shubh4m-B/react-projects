import React, { Component } from 'react'
import Dice from './Dice.js';

export class DiceRoll extends Component {
    render() {
        return (
            <div>
                <Dice/>
                <Dice/>
            </div>
        )
    }
}

export default DiceRoll
