import React from "react";

function Bold(props) {
  return (
    <div className={props.class}>
      <button
      type = "button"
        style={
          props.gTags.teg === "B"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        onClick={() => { document.execCommand("bold", false, null); props.setActive((props.active === false) ? true : false);}}
      >
        <svg
          style={
            props.gTags.teg === "B"
              ? { padding: "2px", backgroundColor: "#cccccc" }
              : {}
          }
          width="2em"
          viewBox="0 0 16 16"
          className="bi bi-type-bold"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
        </svg>
      </button>
    </div>
  );
}
export default Bold;
