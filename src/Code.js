import React, { useEffect, useState } from "react";
import TitlesEl from "./TitlesEl";
export default function Code(props) {
  const [state, setState] = useState(true);
  useEffect(() => {
    state
      ? props.setDisplayTextarera({
          display: "none"
        })
      : props.setDisplayTextarera(
          Object.assign(
            {},
            {
              marginTop: "-720px",
              width: "100%",
              zIndex: 4,
              left: 0,
              height: "700px"
            },
            props.panelStyle
          )
        );
  }, [state, props.panelStyle]);
  useEffect(() => {
    console.log(props.panelStyle);
  }, [props.panelStyle]);
  return (
    <div className={`${props.class} titlesBas headingBtn`}>
      <TitlesEl type="Класс элемента" />
      <button
        onClick={() => {
          setState(state === false ? true : false);
          props.setStateCode(state === false ? true : false);
        }}
        style={
          props.gTags.teg === "B"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        type="button"
        className={"bi bi-justify-left " + props.itemsLine + "-iteml"}
      >
        {state ? (
          <svg
            width="2em"
            viewBox="0 0 16 16"
            className="bi bi-type-bold"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
          </svg>
        ) : (
          <svg
            width="2em"
            viewBox="0 0 16 16"
            className="bi bi-type-bold"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
