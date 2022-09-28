import React from "react";
import { replaceElement, typeStyle, selectedStyles } from "./action/index";
function Htype(props) {
  function hActive(t, n) {
    if (t === n) {
      return "head-button-" + t;
    }
  }

  return (
    <li className="titlesBas">
      {props.count}
      <button
        type="button"
        style={typeStyle(props.find.tagName, props.t, "button")}
        onClick={() => {
          // props.izmtegs(props.t, props.find, props.items);
          props.settegsLocal(props.t);
          props.setActive(props.active === false ? true : false);
          props.setIconTags(props.t);
          props.setSelectPanelDicplay(false);

          if (props.count < 3) {
            replaceElement(props);
          } else {
            selectedStyles(props, props.t);
          }
        }}
        className={hActive(props.tegsLocal, props.t)}
      >
        {props.names}
      </button>
    </li>
  );
}
export default Htype;
