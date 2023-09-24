import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       
         name1:'',
         phno:'',
         address:'',
         gender:'',
         city:'',
         fromarr:[]

      }
    }
    
   takevalue=(e)=>{
    this.setState({name1:e.target.value})
   }
   takevalue2=(e)=>{this.setState({address:e.target.value})}
   
  onChangeValue(event) {
    console.log(event.target.value);
    this.setState({gender:event.target.value})
  }
  takeselectvalue=(e)=>{
    console.log(e.target.value)
    this.setState({city:e.target.value})
  }
  
  submitvalue=(event)=>{
   event.preventDefault();
   
   let  temparr=[];
    temparr.push(this.state.name1,this.state.address,this.state.phno,this.state.gender,this.state.city);
    // alert(temparr)
    this.setState({fromarr:temparr})
    
  }
 


  render() {
    return (
      <div>
        <form onSubmit={this.submitvalue}>
          <input type="text" value={this.state.name} placeholder="enter name" onChange={this.takevalue}></input><br/>
          <textarea value={this.state.address} placeholder="address"onChange={this.takevalue2}></textarea><br/>
          <div onChange={this.onChangeValue}>
          <label>Gender:</label><br/>
          <label>Male
          <input  type="radio" value="male" name="gender"></input>
          </label>
          <label>Female
          <input  type="radio" value="female" name="gender"></input>
          </label>
          <label>other
          <input  type="radio" value="other" name="gender"></input>
          </label>
          </div><br/>

          <div onChange={this.takeselectvalue}>
          <label>City</label>
          <select>
            <option>kolkata</option>
            <option>delhi</option>
            <option>mumbai</option>
          </select>
          </div>
          
            
          
          <button type='submit' >Sbmitt</button>
        </form>
        <div>
          
          
            <p>{this.state.fromarr.toString() }</p>
            
          
        </div>
        
      </div>
    )
  }
}
