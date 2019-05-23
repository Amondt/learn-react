import React, { Component } from 'react'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, content: 'Buy some milk'},
                { id: 2, content: 'Carte bleue'}
            ]
        }
    }

    delTodo = (id) => {
        let todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
    }

    handleSubmit = (todo) => {
        todo.id = Math.random()
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
        console.log('submit', todos)
    }

    render() {
        const { todos } = this.state

        return (
        <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={ todos } delTodo={ this.delTodo } />
            <AddTodo handleSubmit={this.handleSubmit} />
        </div>
        )
    }
}

export default App
