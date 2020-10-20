import React from "react";

function Inputs(props) {
  return (
    <div className={"col-" + props.col + ' text-left ' + props.classes}>
     <label htmlFor={props.id}>{props.name}</label>
     <input id = {props.id} className="form-control form-control-lg" type="text" placeholder={props.text} onChange = {(e)=>props.cange(e.target.value)}/>
    </div>
  );
}
export default Inputs;
