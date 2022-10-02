import React, { useEffect, useState } from "react";
import { selectedStyles } from "./action";
import TitlesEl from "./TitlesEl";
export default function AddClass(props) {
  const [stylesEl, setStylesEl] = useState("");
  useEffect(() => {
    addCl(props);
  }, [props.find]);


  function addCl(props, option = {}) {
    if (props.find.tagName !== undefined) {
      if (option.reclama === true) {
        if (props.find.getAttribute("class") != null) {
          let cl = props.find.getAttribute("class");
          setStylesEl(cl);
          let pregCl = cl.match(/add_reclama/g);
          if (!pregCl) {
            props.find.setAttribute("class", cl + " add_reclama");
            setStylesEl(cl + " add_reclama");
          }

        } else {
          props.find.className = "add_reclama";
        }

      } if (option.e) {

        if (props.find.getAttribute("class") != null) {
          props.find.setAttribute("class", option.e.target.textContent);
        } else {
          props.find.className = option.e.target.textContent;
        }

      } else {
        if (props.find.tagName !== undefined) {
          if (props.find.getAttribute("class") != null) {
            setStylesEl(props.find.getAttribute("class"));
          }
        }
      }
    }
  }
  return (
    <div className={`${props.class} titlesBas headingBtn`}>
      <TitlesEl type="Класс элемента" />
      <button
        style={
          props.gTags.teg === "B"
            ? { backgroundColor: "#cccccc", border: "none" }
            : { border: "none" }
        }
        onMouseOver={() => {
          addCl(props)
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
          addCl(props, { reclama: true })
        }}
      >
        Реклама
      </div>
      <div
        className="boxes cssElements"
        dangerouslySetInnerHTML={{ __html: stylesEl }}
        contentEditable={true}
        onKeyUp={(e) => {
          addCl(props, { e: e });
        }}
      />
    </div>
  );
}
