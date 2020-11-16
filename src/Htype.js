import React from "react";

function Htype(props) {
  function hActive(t, n) {
    if (t === n) {
      return "head-button-" + t;
    }
  }
  return (
    <button
      type="button"
      style={props.typeStyle(props.find.tagName, props.t, "button", props.s)}
      onClick={() => {
        props.izmtegs(props.t, props.find, props.items, props.t);
        props.settegsLocal(props.t);
        props.setActive((props.active === false) ? true : false);
      }}
      className={hActive(props.tegsLocal, props.t)}
    >
      <svg
        style={props.typeStyle(props.find.tagName, props.t, "svg")}
        width="2em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.svg}
      </svg>
    </button>
  );
}
export default Htype;
