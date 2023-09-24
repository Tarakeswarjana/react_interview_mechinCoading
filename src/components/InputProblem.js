import React, { Component } from 'react'

export default class InputProblem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        input1:'',
        input2:''
      }
    }
    getinputonevalue=(event)=>{
        this.setState({input1:+event.target.value,input2: +event.target.value +1})

    }
    getinputonevalue2=(event)=>{
      this.setState({input2:+event.target.value,input1:+event.target.value-1})
    }
  render() {
    return (
      <div>
        <input type="number" value={this.state.input1} onChange={this.getinputonevalue} placeholder="input1"></input><br></br>
        <input type="number" value={this.state.input2} onChange={this.getinputonevalue2} placeholder="input2"></input>
      </div>
    )
  }
}
