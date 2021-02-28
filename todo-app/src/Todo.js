import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props){
        super(props);
        this.handelDelete = this.handelDelete.bind(this);
    }

    handelDelete(){
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div>
                <li>{this.props.task}</li>
                <button>Edit</button>
                <button onClick={this.handelDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo
