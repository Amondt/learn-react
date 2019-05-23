import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(this.state); e.target.userInput.value = ''}}>
                <label>Add new todo:</label>
                <input type="text" name="userInput" id="userInput" onChange={(e) => {this.handleChange(e)}}/>
            </form>
        )
    }
}

export default AddTodo