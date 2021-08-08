import React, { useState } from "react";
import { selectedStyles, countArray } from "./action/index";
import TitlesEl from "./TitlesEl";
import "./css/palitra.css";
import ColorsPanel from "./ColorsPanel";
export default function LiterSelectColor(props) {
  const [rgb, setRgb] = useState("rgb(0, 0, 255)");
  const [close, setClose] = useState(false);
  
  return (
    <div className="listItems">
      <div className=" titlesBas">
        <TitlesEl type="Цвет шрифта" />
        <button
          onClick={() => {
            setClose(true);
          }}
          type="button"
          className={"bi bi-justify-left " + props.itemsLine + "-iteml"}
        >
          <svg
            width="2em"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className = "literSelectColor"
          >
            <text x="5" y="11" style={{ fontSize: "10pt" }}>
              A
            </text>
            <rect width="21" height="5" x="0" y="12" fill={rgb}></rect>
          </svg>
        </button>
      </div>
      {close === true ? <ColorsPanel select = "literSelectColor" setRgb = {setRgb} rgb = {rgb} styles = "color"  setClose = {setClose}  params = {props}   element = "span"/> : ""}
    </div>
  );
}
