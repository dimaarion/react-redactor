import React, { useEffect, useState } from "react";
import "./css/tablecolredactor.css"
export default function TableColRedactor(props) {
     const [col, setCol] = useState(0);
     const [colr, setColr] = useState(0);
     useEffect(()=>{
         if(props.find.tagName === "TD"){
              props.find.setAttribute("style","width:"+ col +"px");
              setColr(props.find.getAttribute("style"));
         }
       
     },[col, props.find])
    
    return (
    <div className="row ">
        <div className="col-sm">
        </div>
        <input onChange = {(e)=>setCol(e.target.value)} className="form-control col-sm-1 tablecolredactor" type="text" placeholder="0" aria-label="default input example" />
    </div>) 
}