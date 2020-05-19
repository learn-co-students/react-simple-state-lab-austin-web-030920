import React, { Component } from 'react';
import { default_pattern } from './data'
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map((val, index) => <Cell value={val} key={`cell-${index}`}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map((rowVals, index) => <div key={`row-${index}`} className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: default_pattern
}
