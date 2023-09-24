import React from "react";
import { useState, useEffect } from "react";
import "./Todonew.css";

const Todonew = () => {
  const[todoarr,settodoarr] =useState(() => {
  
    const savedTodos = localStorage.getItem("todos");
   
    if (savedTodos) {
    
      return JSON.parse(savedTodos);
      
    } else {
      
      return [];
    }
  });
  const [inputval, setinputval] = useState("");
  const [val, seteditval] = useState("");
  const [editind,setEditindex]=useState("");
  const[searcharr,setsearcharr]=useState([]);
 const[searchinput,setsearchinput]=useState("");
 const[searchstyle,setsearchstyle]=useState("none");

 console.log(searchinput);

  const handleadd = (val) => {
    if (val) {
     todoarr[editind]=inputval;
     settodoarr(todoarr);
     console.log(todoarr);
     seteditval("");
     setinputval("");
    } else {
      settodoarr([...todoarr, inputval]);
      setinputval("");
    }
  };




  const editwork = (ind) => {
    setinputval(todoarr[ind]);
    setEditindex(ind);
    seteditval("edit");
  };



  const deleteitem = (index) => {
    const temparr = todoarr.filter((ele, ind) => {
      return ind != index;
    });
    settodoarr(temparr);

  };

  const searchelement=(value)=>{

    let temparr=[];
    if(value){
        setsearchstyle("block");
            
let tempval=value.trim();
 for(let i=0;i<todoarr.length;i++){
        if(todoarr[i].match(tempval)){

            temparr.push(todoarr[i]);
        }
    }

   console.log(temparr);
setsearcharr(temparr);
        
    }else{
        setsearcharr(temparr);
    }

  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoarr))}
    ,[todoarr]
  )

 
  return (
    <div className="main">

<div className="searchsection">
<input type={"text"} value={searchinput} onChange={
    (e)=>{
        setsearchinput(e.target.value);
         searchelement(e.target.value)}}/>

<div style={{display:`${searchstyle}`}}>
    {(searcharr.map((ele,indx)=>{return(
        <h2 key={indx}>{ele}</h2>)
    }))}

</div>
</div>


      <div className="input">
        <input
          type={"text"}
          value={inputval}
          placeholder="enter the work"
          onChange={(e) => {
            setinputval(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleadd(val);
          }}
        >
          Add Work
        </button>
      </div>
      <div>
        {todoarr.map((ele, index) => {
          return (
            <div className="work">
              <h2 key={index}>{ele}</h2>

              <button onClick={() => editwork(index)}>Edit</button>
              <button
                onClick={() => {
                  deleteitem(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todonew;
