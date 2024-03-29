import React from "react";
import { selectedStyles } from "./action";
import TitlesEl from "./TitlesEl";
function Strikethrough(props) {
  return (
    <div className={`${props.class} titlesBas`}>
      <TitlesEl type="Зачеркнутый" />
      <button
        type="button"
        style={
          props.gTags.teg === "S"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        onClick={() => {
          selectedStyles(props, "s");
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
          className="bi bi-type-strikethrough"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.527 13.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM6.602 6.5H5.167a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z" />
          <path fillRule="evenodd" d="M15 8.5H1v-1h14v1z" />
        </svg>
      </button>
    </div>
  );
}
export default Strikethrough;
