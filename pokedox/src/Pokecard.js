import React, {Component} from 'react';
import './Pokecard.css';

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let addZeroes = (number)=>(number<=999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component{
    render(){
        let imgSrc = `${POKE_API}${addZeroes(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc}/>
                <p>
                    <b>Type: </b>{this.props.type}
                </p>
                <p>
                    <b>Base Xp: </b>{this.props.exp}
                </p>
            </div>
        );
    }
}

export default Pokecard;