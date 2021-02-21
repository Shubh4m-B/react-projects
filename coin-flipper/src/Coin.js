import React, { Component } from 'react'
import './Coin.css';

export class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img src={this.props.info.imgSrc} alt={this.props.info.side} className="Coin-img"/>
            </div>
        )
    }
}

export default Coin
