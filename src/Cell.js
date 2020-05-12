import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super();

        this.state = {
            color: props.value
        }
    }
    
    handleOnClick = () => {
        console.log(this.state.color);
        this.setState({color: "#333"})
    }

    render() {
        return (
            <div onClick={this.handleOnClick} className="cell" style={{backgroundColor: `${this.state.color}`}}>
                
            </div>
        );
    }
}

export default Cell;
