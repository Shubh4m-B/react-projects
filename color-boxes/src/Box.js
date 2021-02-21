import React, { Component } from 'react'
import {choice} from './helpers';
import './Box.css'

export class box extends Component {
    static defaultProps = {
        colors:["red", "blue", "green", "yellow", "lime", "pink", "purple", "cyan"]
    }

    constructor(props){
        super(props);
        this.state={
            color:choice(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor(){
        let newColor
        do{
            newColor = choice(this.props.colors);
        }while(newColor===this.state.color)
        this.setState(st=>{
            return{
                color:newColor
            }
        })
    }

    handleClick(e){
        this.changeColor();
    }
    render() {
        return (
            <div className="Box" style={{backgroundColor:this.state.color}} onClick={this.handleClick}>
                
            </div>
        )
    }
}

export default box
