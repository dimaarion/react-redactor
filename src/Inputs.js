import React from "react";


function Inputs(props) {
  let c = '';
  if(!props.c){
      c = '';
}else{
  c = props.c;
}

  return (
    <div className={"col-" + props.col + ' text-left ' + c }>
     <label htmlFor={props.id}>{props.name}</label>
     <input id = {props.id} defaultValue = {props.value} className="form-control form-control-lg" type="text" placeholder={props.text} onChange = {(e)=>props.cange(e.target.value)}/>
    </div>
  );
}
export default Inputs;
