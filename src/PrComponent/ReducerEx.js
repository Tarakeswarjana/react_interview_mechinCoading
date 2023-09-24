import React from 'react'
import { useState,useReducer } from 'react';
import "./ReducerEx.css"
 const initialstate=0;

// const reducer=(state,action)=>{
//     switch(action){
//         case "UPDATE" :
//             return state+1;
//         case   "DECREASE":
//             if(state==0)
//             return state ;
//             else
//             return state-1;
//          case  "Reset":
//             return initialstate; 
//             default :
//             return state;   
//     }
// }

const reducer=(state,action)=>{
switch(action){
    case "UPDATE":
        return state+1;
    case  "DECREASE":
        return state -1;
     case  "Reset":
        return initialstate;
      default:return state      
}
}


function ReducerEx() {
 const[count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div className='main' >ReducerEx
       <div className='count'>
        <button onClick={()=>{dispatch("UPDATE")}}> update</button>
        <button onClick={()=>{dispatch("DECREASE")}}>decrease</button>
        <button onClick={()=>{dispatch("Reset")}}>reset</button>
        count: {count};
        </div>
        {/* <div className='flexcollumn'>
<div className='upper_container'>
<p className='container'></p>
<p className='container'></p>
<p className='container'></p>
<p className='container'></p>
</div>
<div className='upper_container'>
<p className='container'></p>
<p className='container'></p>
<p className='container'></p>
<p className='container'></p><p className='container'></p>
<p className='container'></p>
<p className='container'></p>
<p className='container'></p>
</div>
<div className='upper_container'><p className='container'></p>
<p className='container'></p>
<p className='container'></p>
</div>
        </div> */}
    </div>
  )
}

export default ReducerEx