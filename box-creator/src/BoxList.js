import React, { Component } from 'react'
import BoxCreator from './BoxCreator'
import Box from './Box'

export class BoxList extends Component {

    constructor(props){
        super(props);
        this.state={
            boxes:[]
        };
        this.create = this.create.bind(this);
    }

    create(newBox){
        this.setState({
            boxes:[...this.state.boxes, newBox]
        });
    }

    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box width={box.width} height={box.height} color={box.color} key={box.key} id={box.id} removeBox={() => this.remove(box.id)}/>
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
