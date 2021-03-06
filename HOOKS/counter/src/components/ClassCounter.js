import React, { Component } from 'react'

class ClassCounter extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }



    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>count {this.state.count}</button>
                <button onClick={this.decrementCount}>count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
