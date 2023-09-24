 import axios from 'axios';
import React from 'react';
import "./Apifech.css";
 import {useState,useEffect} from "react";

 const Apifetch = () => {
const [data,setdata]=useState({name:"",mail:"",num:""})
const handledata=(e)=>{
e.preventDefault();
alert(JSON.stringify (data));
axios.post('https://jsonplaceholder.typicode.com/posts',data)
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err)})
setdata({name:"",mail:"",num:""})
}
const handlechange=(e)=>{
const {name,value}= e.target;
setdata({...data,[name]:value});

}
   return (
     <div className='main'>
       <form  className='form' onSubmit={handledata}>
    <input className="inputval" value={data.name} type= "text" name="name" placeholder="name" onChange={handlechange} />
    <input className="inputval"  value={data.mail}type= "mail" name="mail" placeholder="mail" onChange={handlechange} />
    <input className="inputval" value={data.num} type= "number" name="num" placeholder="phno" onChange={handlechange} />
      
      <button type='submit'>submit</button> </form>
     </div>
   );
 }
 
 export default Apifetch;
 