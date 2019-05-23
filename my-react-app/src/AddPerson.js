import React, { Component } from 'react'

export default class AddPerson extends Component {
    state = {
        name: null,
        age: null,
        color: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPerson(this.state)
    }
    render() {
        return (
        <div>
            <br/>
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={ this.handleChange } />
                <br/>

                <label htmlFor="age">Age</label>
                <input type="text" id="age" name="age" onChange={ this.handleChange } />
                <br/>

                <label htmlFor="color">Color</label>
                <input type="text" id="color" name="color" onChange={ this.handleChange } />
                <br/>

                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}
