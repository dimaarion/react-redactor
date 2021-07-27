import React from "react";
import { replaceElement, typeStyle, selectedStyles } from "./action/index";
import TitlesEl from "./TitlesEl";
function Htype(props) {
  function hActive(t, n) {
    if (t === n) {
      return "head-button-" + t;
    }
  }
  return (
    <li className="titlesBas">
      <button
        type="button"
        style={typeStyle(props.find.tagName, props.t, "button")}
        onClick={() => {
          // props.izmtegs(props.t, props.find, props.items);
          props.settegsLocal(props.t);
          props.setActive(props.active === false ? true : false);
          props.setIconTags(props.t);
          props.setSelectPanelDicplay(false);
          selectedStyles(props, props.t);
        }}
        className={hActive(props.tegsLocal, props.t)}
      >
        {props.names}
      </button>
    </li>
  );
}
export default Htype;
