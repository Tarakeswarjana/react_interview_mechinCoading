import React, { Component } from 'react'

export default class NameGender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         namevalue:'',
         gender:''
      }
    }
    getnamevalue=(event)=>{
        this.setState({namevalue:event.target.value})
    }
  render() {
    return (
      <div>NameGender
        <input type="text" value={this.state.namevalue} onChange={this.getnamevalue}></input>
      </div>
    )
  }
}
