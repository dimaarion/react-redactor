import React from "react";

function Htype(props) {
  return (
    <button
      style={props.typeStyle(props.tegsLocal, props.t, "button", props.s)}
      onClick={() => {
        props.izmtegs(props.ititalTegs, props.t, props.find, props.items);
        props.settegsLocal(props.t);
      }}
    >
      <svg
        style={props.typeStyle(props.tegsLocal, props.t, "svg")}
        width="2em"
        viewBox="0 0 16 16"
        className={"bi bi-type-h1 " + props.tegsLocal + props.n}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.svg}
      </svg>
    </button>
  );
}
export default Htype;
