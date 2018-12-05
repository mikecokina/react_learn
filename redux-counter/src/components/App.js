import React from 'react'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.counter = 0
        this.addOne = this.addOne.bind(this)
    }

    addOne() {
        this.counter += 1
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <button
                    onClick={ this.addOne }>
                    Increment
                </button>
                { this.counter }
            </div>
        )
    }
}

export default App
