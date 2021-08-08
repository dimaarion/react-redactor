import React, { useEffect, useState } from "react";
import { selectedStyles, countArray } from "./action/index";
import TitlesEl from "./TitlesEl";
import "./css/palitra.css";
import ColorsPanel from "./ColorsPanel";
export default function LiterBgColor(props) {
  const [rgb, setRgb] = useState("rgb(255, 0, 255)");
  const [rgbInv, setRgbInv] = useState("rgb(255, 255, 255)");
  const [close, setClose] = useState(false);

  return (
    <div className="listItems">
      <div className="titlesBas">
        <TitlesEl type="Выделение" />
        <button
          onClick={(event) => {
            setClose(true);
           
          }}
          type="button"
          className={"bi bi-justify-left " + props.itemsLine + "-iteml "}
        >
          <svg
            className = "literBgColor"
            width="2em"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="21" x="0" y="0" fill={rgb}></rect>
            <text x="5" y="14" style={{ fontSize: "10pt", color: rgbInv }}>
              A
            </text>
          </svg>
        </button>
      </div>

      {close === true ? <ColorsPanel select = "literBgColor" setRgb = {setRgb} rgb = {rgb} styles = "background-color"  setClose = {setClose}  params = {props} setRgbInv = {setRgbInv} element = "span"/> : ""}
    </div>
  );
}
