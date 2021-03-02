import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

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
            <form onSubmit={this.handelSubmit} className="TodoForm">
                
                <input type="text" placeholder="New Task" name="task" id="task" value={this.state.task} onChange={this.hadelChange} className="TodoForm-input"></input>
                <button className="TodoForm-submit">Add</button>
            </form>
        )
    }
}

export default TodoForm
