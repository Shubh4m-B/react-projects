import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing:false,
            task:this.props.task
        };
        this.handelDelete = this.handelDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handelUpdate = this.handelUpdate.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    handelDelete(){
        this.props.removeTodo(this.props.id);
    }

    toggleForm(){
        this.setState({
            isEditing:!this.state.isEditing
        });
    }

    handelUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.toggleForm();
    }

    handelChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }

    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handelUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handelChange}></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        else{
            result=(
                <div>
                    <li>{this.props.task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handelDelete}>Delete</button>
                </div>
            )
        }
        return result;
    }
}

export default Todo
