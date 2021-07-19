import React from "react";
export default function LiterSelectColor(props) {
  return (
    <div className="listItems">
      <button
        type="button"
        className={"bi bi-justify-left " + props.itemsLine + "-iteml"}
      >
        <svg
          width="2em"
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="4" y="13">
            A
          </text>
        </svg>
      </button>
    </div>
  );
}
