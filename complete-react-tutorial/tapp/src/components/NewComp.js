import React, { Component } from 'react'


class NewComp extends Component {
    render() {
        const { name, age, status } = this.props

        return (
            <div className="new-comp">
                <div>Name: { this.props.name }</div>
                <div>Age: { this.props.age }</div>
                <div>Status: { this.props.status }</div>

                /* distruct props */
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Status: { status }</div>
            </div>



    );
    }
}

export default NewComp