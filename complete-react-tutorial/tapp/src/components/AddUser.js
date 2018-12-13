import React, { Component } from 'react'


class AddUser extends Component {
    state = {
        name: null,
        age: null,
        status: null
    };

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        let currentState = this.state;
        this.props.addUserFn(currentState);

    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleOnChange} />
                    <br />

                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleOnChange} />
                    <br />

                    <label htmlFor="name">Status:</label>
                    <input type="text" id="status" onChange={this.handleOnChange} />
                    <br />

                    <button>Submit</button>
                    <br />


                </form>
            </div>
        );
    }
}

export default AddUser

