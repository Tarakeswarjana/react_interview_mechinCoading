import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Postdata = () => {
    const [data,setdata]= new useState({name:"",email:"",body:""});
    const handleChange=(e)=>{
const {name,value}=e.target;
setdata({...data,[name]:e.target.value});

    }
    const handlesubmit=(e)=>{
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text"  onChange={handleChange} name= "name" value={data.name} placeholder='name'></input>
            <input type="text" onChange={handleChange} name= "email" value={data.email} placeholder='email'></input>
            <input type="text" onChange={handleChange} name= "body" value={data.body} placeholder='body'></input>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  );
}

export default Postdata;
