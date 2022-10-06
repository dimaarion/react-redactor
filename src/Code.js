import React from "react";
import TitlesEl from "./TitlesEl";
export default function Code(props) {
  return (
    <div className={`${props.class} titlesBas headingBtn`}>
      <TitlesEl type="Класс элемента" />
      <button
        onClick={() =>
          props.setDisplayTextarera({
            display: "block",
            position: "absolute",
            marginTop: "-722px",
            width: "100%",
            marginLeft: "-10px",
            height: "700px"
          })
        }
        style={
          props.gTags.teg === "B"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        type="button"
        className={"bi bi-justify-left " + props.itemsLine + "-iteml"}
      >
        <svg
          width="2em"
          viewBox="0 0 16 16"
          className="bi bi-type-bold"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
        </svg>
      </button>
    </div>
  );
}
