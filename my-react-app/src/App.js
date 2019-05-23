import React, { Component } from 'react'
import { Person } from './Person'
import AddPerson from './AddPerson'

export default class App extends Component {
    state = {
        persons: [
            { name: 'Ryu', age: 30, color: 'black', id: 1 },
            { name: 'Yoshi', age: 20, color: 'green', id: 2 },
            { name: 'Crystal', age: 25, color: 'pink', id: 3 }
        ]
    }
    addPerson = (person) => {
        person.id = Math.random()
        let persons = [...this.state.persons, person]
        this.setState({
            persons: persons
        })
    }
    delPerson = (id) => {
        let persons = this.state.persons.filter(person => {
            return person.id !== id
        })
        this.setState({
            persons: persons
        })
    }
    render() {
        return (
        <div className="App">
            <h1>React App</h1>
            <p>Hi !</p>
            <Person persons={ this.state.persons } delPerson={ this.delPerson } />
            <AddPerson addPerson={ this.addPerson } />
        </div>
        )
    }
}