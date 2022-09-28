import React, { useEffect, useState } from "react";
import { selectedStyles } from "./action";
import TitlesEl from "./TitlesEl";
export default function AddClass(props) {
  const [stylesEl, setStylesEl] = useState("");
  useEffect(() => {
    if (props.find.tagName !== undefined) {
      if (props.find.getAttribute("class") != null) {
        setStylesEl(props.find.getAttribute("class"));
      }
    }
  }, [props.find]);

  return (
    <div className={`${props.class} titlesBas headingBtn`}>
      <TitlesEl type="Класс элемента" />
      <button
        style={
          props.gTags.teg === "B"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        onClick={() => {
          if (props.find.tagName !== undefined) {
            if (props.find.getAttribute("class") != null) {
              setStylesEl(props.find.getAttribute("class"));
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
          <text x={0} y={11} style={{ fontSize: "5pt", color: "#000" }}>
            class
          </text>
        </svg>
      </button>
      <div
        className="cssElementsReclama"
        onClick={(e) => {
          setStylesEl("add_reclama");
          if (props.find.tagName !== undefined) {
            if (props.find.getAttribute("class") != null) {
              props.find.setAttribute("class", "add_reclama");
            }
          }
        }}
      >
        Реклама
      </div>
      <div
        className="boxes cssElements"
        dangerouslySetInnerHTML={{ __html: stylesEl }}
        contentEditable={true}
        onKeyUp={(e) => {
          if (props.find.tagName !== undefined) {
            if (props.find.getAttribute("class") != null) {
              props.find.setAttribute("class", e.target.textContent);
            }
          }
        }}
      />
    </div>
  );
}
