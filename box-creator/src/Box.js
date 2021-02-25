import React, { Component } from 'react'

export class Box extends Component {
      render() {
        return (
            <div>
                <div style={{
                    backgroundColor:this.props.color,
                    height:`${this.props.height}px`,
                    width:`${this.props.width}px` 
                }}/>
                <button onClick={this.props.removeBox}>DELETE</button>
            </div>
        )
    }
}

export default Box
