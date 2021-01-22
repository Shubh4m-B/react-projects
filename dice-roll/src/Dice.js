import React, { Component } from 'react'
import './Dice.css'

export class Dice extends Component {
    render() {
        return (
            <div className="Dice">
                <i className={`Dice-face fas fa-dice-${this.props.face}`}/>
            </div>
        )
    }
}

export default Dice
