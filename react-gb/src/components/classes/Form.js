import React, { Component } from 'react'
export class Form extends Component {

    state = {
        name: 'Biba',
        count: 0
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleClick = (event) => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <h1 style={{ color: 'pink' }}>Classes Component!</h1>
                <h2 style={{ color: 'blue', border: '1px solid blueviolet' }}>Name: {this.state.name}</h2>
                <input type="text" onChange={this.handleChange} />
                <p>COUNT: {this.state.count}</p>
                <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={this.handleClick}>Click</button>
            </>
        )
    }
}