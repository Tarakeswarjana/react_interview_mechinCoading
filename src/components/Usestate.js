import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Usestate() {
    const [count,setcount]=useState(5);
    var [myarr,updatearr]=useState([]);
    useEffect(()=>{
        alert("kam khatam");
    },[])
    
  return (

    <div>{count}
    <button onClick={()=>{setcount(count+1)}}>click me</button>
    <button onClick={()=>{updatearr(myarr=[...myarr,`${count}`])}}>addarrvalue</button>
    {myarr.map((ele)=><p>{ele}</p> )}
    </div>
   
    
  )
}

