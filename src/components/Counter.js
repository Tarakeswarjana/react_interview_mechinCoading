import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
       super(props)
        this.state={counter:0,
          value:"0",
        counterarr:[]}
    }
    updatevalue=()=>{

      const newvalue=this.state.counter +parseInt(this.state.value);
        this.setState({counter:newvalue});
        
        }
        downdatevalue=()=>{
          
          this.setState({counter:this.state.counter-parseInt(this.state.value)})
        }
        capturevalue=()=>{
          this.state.counterarr.push(this.state.counter);
    
          this.setState({counterarr:this.state.counterarr});
          this.setState({value:"0"});
    
        }
    

  render() {
    return (
      <div>
        <input type= "text" value={this.state.value} onChange={(e)=>{const inputval=e.target.value;
  
        
         this.setState({value:inputval});
         
        }}/>
        {this.state.counterarr.map((value,index)=><li id={index}>{value}</li>)}
        <p>countvalue:{this.state.counter}</p>
        <button onClick={this.updatevalue}>increment</button>
      <button onClick={this.downdatevalue}>decrement</button>
       <button onClick={this.capturevalue}>capture</button> 
      </div>
    )
  }
}
