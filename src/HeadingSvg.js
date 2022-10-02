import React, { useEffect, useState } from "react";
import TitlesEl from "./TitlesEl";
import "./css/headingsvg.css";

export default function HeadingSvg(props) {
  const [stylesEl, setStylesEl] = useState("");
  useEffect(() => {
    if (props.find.tagName !== undefined) {
      console.log(props.find.getAttribute("style"));
      if (props.find.getAttribute("style") != null) {
        setStylesEl(props.find.getAttribute("style"));
      } else {
        setStylesEl("");
      }
    }
  }, [props.find]);
  return (
    <div className={`${props.class} titlesBas headingBtn`}>
      <TitlesEl type="Стиль элемента" />
      <button
        style={
          props.gTags.teg === "B"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        onMouseOver={() => {
          if (props.find.tagName !== undefined) {
            if (props.find.getAttribute("style") != null) {
              setStylesEl(props.find.getAttribute("style"));
            }
          }
        }}
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
          <text x={0} y={11} style={{ fontSize: "9pt", color: "#000" }}>
            css
          </text>
        </svg>
      </button>
      <div
        className="boxes cssElements"
        dangerouslySetInnerHTML={{ __html: stylesEl }}
        contentEditable={true}
        onKeyUp={(e) => {
          if (props.find.tagName !== undefined) {
            props.find.setAttribute("style", e.target.textContent);
          }
        }}
      />
    </div>
  );
}
