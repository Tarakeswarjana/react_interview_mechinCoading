import React, { useRef } from 'react'
import { useState } from 'react'
function Interview() {
    const[val,setval]=useState("")
    const [newval,setnewval]=useState("");
  
    const inputname=useRef(null);
    console.log(inputname.current.value);
    const show=()=>{
setnewval(val);
    }
  return (
    <div>
        <h1>interview</h1>
        <p>{val}</p>
<input value={val} onChange={(e)=>{setval(e.target.value)}} placeholder={"enter name"} type={"text"}/>
<input type="text" id="inputname" ref={inputname}></input>
    </div>
  )
}

export default Interview