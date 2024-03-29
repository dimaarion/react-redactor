import React from "react";
import { selectedStyles } from "./action";
import TitlesEl from "./TitlesEl";
function Underline(props) {
  return (
    <div className={`${props.class} titlesBas`}>
      <TitlesEl type="Подчеркивание" />
      <button
        type="button"
        style={
          props.gTags.teg === "S"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        onClick={() => {
          selectedStyles(props, "u");
          props.setActive(props.active === false ? true : false);
        }}
      >
        <svg
          style={
            props.gTags.teg === "S"
              ? { padding: "2px", backgroundColor: "#cccccc" }
              : {}
          }
          width="2em"
          viewBox="0 0 16 16"
          className="bi bi-type-underline"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z" />
          <path fillRule="evenodd" d="M12.5 15h-9v-1h9v1z" />
        </svg>
      </button>
    </div>
  );
}
export default Underline;
