import React, { Component } from 'react'
import Box from './Box'

export class BoxList extends Component {

    constructor(props){
        super(props);
        this.state={
            box:[{width:200 , height:500, color: "red"}]
        };
    }
    render() {
        const boxes = this.state.box.map(box => (
            <Box width={box.width} height={box.height} color={box.color}/>
        ));
        return (
            <div>
                <h1>COLOR BOX CREATOR</h1>
                {boxes}
            </div>
        )
    }
}

export default BoxList
