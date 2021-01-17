import React, { Component } from 'react'

export class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = { num: 1 };
        this.genRandom = this.genRandom.bind(this);
    }

    genRandom(){
        //Generate random between 1 to 10
        let randNum = Math.floor(Math.random() * 10) + 1;
        // change the state with the rando number generated
        this.setState({num:randNum});
    }
    render() {
        return (
            <div>
                <h1>Number is: {this.state.num}</h1>
                <button onClick={this.genRandom}>Generate Random</button>
            </div>
        )
    }
}

export default Clicker
