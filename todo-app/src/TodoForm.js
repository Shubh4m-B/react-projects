import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state={task:""}
        this.hadelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }
    handelSubmit(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed:false});
        this.setState({
            task:""
        });
    }
    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <label htmlFor="task">New Task</label>
                <input type="text" placeholder="New Task" name="task" id="task" value={this.state.task} onChange={this.hadelChange}></input>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm
