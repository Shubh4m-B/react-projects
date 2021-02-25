import React, { Component } from 'react'

export class Box extends Component {
    static defaultProps={
        height:20,
        width:30,
        color:"red"
    }
    render() {
        return (
            <div>
                <div style={{
                    backgroundColor:this.props.color,
                    height:`${this.props.height}px`,
                    width:`${this.props.width}px` 
                }}></div>
                <button>DELETE</button>
            </div>
        )
    }
}

export default Box
