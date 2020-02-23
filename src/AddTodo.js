import React, { Component } from 'react'

//props get passed to class-based component
class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        //prevents page default behavior of refreshing page when request is submitted
        e.preventDefault(); 

        //fires the addTodo function and passing in this.state as the perimeter
        this.props.addTodo(this.state);

        //after submission, empty the state content again so the input field is empty
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo