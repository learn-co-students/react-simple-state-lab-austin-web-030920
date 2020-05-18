import React, { Component } from 'react';


class Cell extends Component {
    constructor(fart) {
        super()
        this.state = {
            color: fart.value
        }
    };

    doSomething = (e) => {
        this.setState({color: "#333"})
    }

    render() {
        return (
            
            <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.doSomething}/>
        )
    }
}




export default Cell;
