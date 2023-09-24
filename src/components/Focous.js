import React from "react";
import {useState} from "react";
import { useRef } from "react";
import { useEffect } from "react";
const Focous=()=>{
    const inputElRef = useRef(null)
  
  useEffect(()=>{
    inputElRef.current.focus()
  }, [])
  
  return(
    <div>
      <input
        defaultValue={'Won\'t focus'}
      />
      <input
        ref={inputElRef}
        defaultValue={'Will focus'}
      />
    </div>
  )
}
export default Focous ;