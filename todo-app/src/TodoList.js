import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

export class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        });
    }

    remove(id){
        this.setState({
            todos:this.state.todos.filter(t => t.id !== id)
        });
    }

    update(id,newTask){
        const updatedTodos = this.state.todos.map(todo=> {
            if(todo.id === id){
                return {...todo, task:newTask}
            }
            else{
                return todo;
            }
        });
        this.setState({
            todos:updatedTodos
        });
    }

    toggleCompleted(id){
        const updatedTodos = this.state.todos.map(todo=> {
            if(todo.id === id){
                return {...todo, completed:!todo.completed}
            }
            else{
                return todo;
            }
        });
        this.setState({
            todos:updatedTodos
        });
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo 
                        key={todo.id} 
                        id={todo.id} 
                        task={todo.task}
                        completed={todo.completed} 
                        removeTodo={this.remove} 
                        updateTodo={this.update}
                        toggleCompleted={this.toggleCompleted}
                    />
        })
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                   {todos} 
                </ul>
                <TodoForm createTodo={this.create}/>
            </div>
        )
    }
}

export default TodoList
