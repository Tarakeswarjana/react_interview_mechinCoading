import React from 'react'
import { useState } from 'react';

const Toggle = () => {
    const[value,setvalue]=useState(false);
    const change=()=>{
        if(value=== false){
            setvalue(true);
        }else
        setvalue(false);
    }
  return (

    <div>Toggle
        <button onClick={change}>Change</button>
        {value?<div>hii iam here</div>:""}
    </div>
  )
}

export default Toggle