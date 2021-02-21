import React, { Component } from 'react'
import Coin from './Coin'
import {choice} from './helpers';
import './CoinContainer.css'

export class CoinContainer extends Component {

    static defaultProps = {
        coins:[
            {side:"heads", imgSrc:"https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png"},
            {side:"tails", imgSrc:"https://qph.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26"}
        ]
    }

    constructor(props){
        super(props);
        this.state={
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st=>{
            return{
                currCoin:newCoin,
                nFlips:st.nFlips+1,
                nHeads:st.nHeads + (newCoin.side === "heads" ? 1:0),
                nTails:st.nTails + (newCoin.side === "tails" ? 1:0)
            }
        }) 
    }

    handleClick(e){
        this.flipCoin();
    }

    render() {
        return (
            <div className="CoinContainer">
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <div className="CoinContainer-text">
                    <h2>Flip a Coin</h2>
                    <button onClick={this.handleClick} className="CoinContainer-btn">Click to toss</button>
                    <p>Out of {this.state.nFlips} flips, {this.state.nHeads} were heads and {this.state.nTails} were tails</p>
                </div>        
            </div>
        )
    }
}

export default CoinContainer
