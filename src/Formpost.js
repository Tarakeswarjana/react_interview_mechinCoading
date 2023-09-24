import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Formpost = () => {
    const[data,setdata]=useState({name:"",email:"",body:""})

   const  handlechange=(e)=>{
    const{name,value}=e.target;
    setdata({...data,[name]:value})
    console.log(data);
}
const element={name:"ram",email:"m@gmail.com",body:"relax"}
const handlesubmit=(e)=>{
e.preventDefault()
axios.post('https://jsonplaceholder.typicode.com/posts',data)
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err)})

}
  return (
    <div>
        <form onSubmit={handlesubmit}>
      <input type= "text" value={data.name} onChange={handlechange} name="name" placeholder='name'></input>
      <input type= "email" value={data.email}name= "email" onChange={handlechange} placeholder='email'></input>
      <input type= "text" value={data.body}name="body" onChange={handlechange} placeholder='body'></input>
      <button type="submit">subbmit</button>
      </form>

    </div>
  );
}

export default Formpost;
