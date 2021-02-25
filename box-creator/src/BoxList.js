import React, { Component } from 'react'
import BoxCreator from './BoxCreator'
import Box from './Box'

export class BoxList extends Component {

    constructor(props){
        super(props);
        this.state={
            box:[{width:200 , height:500, color: "red"}]
        };
        this.create = this.create.bind(this);
    }

    create(newBox){
        this.setState({
            box:[...this.state.box, newBox]
        });
    }
    render() {
        const boxes = this.state.box.map(box => (
            <Box width={box.width} height={box.height} color={box.color}/>
        ));
        return (
            <div>
                <h1>COLOR BOX CREATOR</h1>
                <BoxCreator createBox={this.create}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList
