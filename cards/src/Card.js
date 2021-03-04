import React, { Component } from 'react'
import './Card.css'

// transform: translate(10px 20px) rotate(90deg);
export class Card extends Component {

    constructor(props){
        super(props);
        let angle = Math.random() * 90 - 45;
        let X =Math.random() * 40 -20;
        let Y =Math.random() * 40 -20;
        this._transform = `translate(${X}px,${Y}px) rotate(${angle}deg)`;
    }
    render() {
        
        return (
           <img style={{transform:this._transform}} className="Card" src={this.props.image} alt={this.props.name}></img>
        )
    }
}

export default Card
