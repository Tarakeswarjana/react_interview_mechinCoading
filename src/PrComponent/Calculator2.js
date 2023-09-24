import React from 'react';
import "./calculator2.css";
import { useState } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';

const Calculator2 = () => {
const [res,setresult]= useState(0);
const[screen,screenval]=useState("");
const [arr,setarr]= useState([])

const getvalue=(val)=>{
  screenval(screen+val);
    setarr([...arr,val]);
}

const calculate=()=>{
  let ans="";
  if(arr.length>=3){
    for(let i=0;i<arr.length;i++){
ans=ans+arr[i];

    }}else{
      let ans=`${arr[0]}${arr[1]}${arr[2]}`;
    }
    
     
console.log(ans);
       
        let ans2=eval(ans);
        setresult(ans2);
        arr.splice(0,arr.length);
        arr.push(ans2);
    

}
const clear=()=>{
    arr.splice(0,arr.length);
    setresult(0);
    screenval("");
}
  return (
    
    <div className='main'>
      <div className='screen'><p>{screen}</p><p>{res}</p></div>
      <div className='keypad'>
        <div className='col1' >
            <button onClick={()=>{getvalue(1)}}>1</button>
            <button onClick={()=>{getvalue(2)}}>2</button>
            <button onClick={()=>{getvalue(3)}}>3</button> 
            <button onClick={()=>{getvalue('+')}}>+</button>  
        </div>
        <div className='col1'>
            <button onClick={()=>{getvalue(4)}}>4</button>
            <button onClick={()=>{getvalue(5)}}>5</button>
            <button onClick={()=>{getvalue(6)}}>6</button> 
            <button onClick={()=>{getvalue('-')}}>-</button>  
        </div>
        <div className='col1'>
            <button onClick={()=>{getvalue(7)}}>7</button>
            <button onClick={()=>{getvalue(8)}}>8</button>
            <button onClick={()=>{getvalue(9)}}>9</button> 
            <button onClick={()=>{getvalue('*')}}>*</button>  
        </div>
        <div className='col1'>
            <button onClick={()=>{clear()}}>c</button>
            <button onClick={()=>{getvalue(0)}}>0</button>
            <button onClick={()=>{calculate()}}>=</button>  
            <button onClick={()=>{getvalue('/')}}>%</button> 
        </div>
       
      </div>
    </div>
  );
}

export default Calculator2;
