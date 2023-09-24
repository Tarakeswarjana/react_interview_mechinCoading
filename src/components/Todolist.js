import React, { Component } from 'react'

export default class Todolist extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        todoarr:[],
        inputval:''
      }
    }
takevalue=(event)=>{
this.setState({inputval:event.target.value})
// this.state.todoarr.push(event.inputval);
// this.setState({todoarr:this.state.todoarr})


}

addTodo = (event) =>{
    if(this.state.inputval!==''){
      let newtodoarr=[...this.state.todoarr,this.state.inputval];
      this.setState({todoarr:newtodoarr, inputval:""}) 
    

    }}

    deleteitem=(index)=>{
      let tempArr = [...this.state.todoarr];
      tempArr.slice()
      tempArr.splice(index,1);

     
     // let tempArr =  [...tempArr.slice(0, index), ...tempArr.slice(index + 1)] 
      
      //
    // alert(index); 
      alert(JSON.stringify(tempArr))
      this.setState({todoarr : tempArr});
       // this.state.addTodo();
    }


  render() {
    
    return (
    
      <div >
        <label>Enter the work---</label>
        <input type="text"  value={this.state.inputval} onChange ={this.takevalue}></input>
        
            

        <button onClick={this.addTodo}>show</button>
        {this.state.todoarr.map((element,index)=>{
       return(
        <div style= {{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
         <p style={{ display : 'flex', flex : 5}}>{element}</p>
          <button  style={{display : "flex", flex : 2, justifyContent : 'center', alignItems : 'center'}} id={index} onClick={()=>this.deleteitem(index)}>Delete</button>
         
          </div>)})}
       
      </div>
       
      
    )
  }
}

