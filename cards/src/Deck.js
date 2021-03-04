import React, { Component } from 'react'
import axios from 'axios';
const BASE_URL = "https://deckofcardsapi.com/api/deck/";  

export class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {deck:null, drawn:[]}
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount(){
        let deck = await axios.get(`${BASE_URL}new/shuffle`);
        this.setState({
            deck: deck.data
        })
    }

    async getCard(){
        let cardRes = await axios.get(`${BASE_URL}${this.state.deck.deck_id}/draw/`);
        console.log(cardRes.data)
        let card = cardRes.data.cards[0];
        this.setState(st => ({
            drawn:[
                ...st.drawn,
                {
                    id: card.code,
                    image: card.image,
                    name: `${card.value} of ${card.suit}`
                }
            ]
        }))
        
    }

    render() {
        return (
            <div>
                <h1>DECK OF CARDS</h1>
                <button onClick={this.getCard}>Get Card</button>
            </div>
        )
    }
}

export default Deck
