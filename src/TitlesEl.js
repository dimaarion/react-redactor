import React from "react";
import { titlesContents } from "./action/index";
export default function TitlesEl(props) {
  let left = 32;
  let top = -42;
  if (props.left) {
    left = props.left;
  }
  if (props.top) {
    top = props.top;
  }
  let styles = {
    position: "absolute",
    marginTop: top + "px",
    marginLeft: left + "px"
  };

  return (
    <div className="titlesEl" style={styles}>
      {titlesContents(props)}
    </div>
  );
}
