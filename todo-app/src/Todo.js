import React, { Component } from 'react'

export class Todo extends Component {
    render() {
        return (
            <div>
                <li>{this.props.task}</li>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Todo
