import React from "react";

function Inputs(props) {
  let c = "";
  let t = "text";
  if (!props.c) {
    c = "";
  } else {
    c = props.c;
  }
  if (props.type) {
    t = props.type;
  } else {
    t = "text";
  }
  return (
    <div style={props.divStyle} className={`col-${props.col} ${c} text-left`}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        title={props.title}
        style={props.style}
        id={props.id}
        defaultValue={props.value}
        className={`form-control form-control-lg ${props.inputClass}`}
        type={t}
        placeholder={props.text}
        onChange={(e) => props.cange(e.target.value)}
      />
    </div>
  );
}
export default Inputs;
