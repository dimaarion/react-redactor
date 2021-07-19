import React, { useState } from "react";
import { selectedStyles, countArray } from "./action/index";
export default function LiterSelectColor(props) {
  const [rgb, setRgb] = useState();
  function palitra(setRgb, rgb) {
    return (
      <table style={{ position: "absolute", width: "300px", height: "300px" }}>
        <tbody>
          {countArray(6).map((n) => (
            <tr>
              {countArray(6).map((j) => (
                <td
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor:
                      "rgb(" +
                      Math.floor(255 - 42.5 * n) +
                      "," +
                      Math.floor(255 - 42.5 * j) +
                      "," +
                      rgb +
                      ")"
                  }}
                ></td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan="6">
              <input
                type="range"
                onChange={(e) => setRgb(e.target.value)}
                className="form-range"
                min="0"
                max="255"
                step="1"
                id="customRange1"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
    // ctx.fillRect(j*25,i*25,25,25);
  }
  return (
    <div className="listItems">
      {rgb}
      <button
        onClick={() => {
          selectedStyles(props, "span", false, "color:red;");
        }}
        type="button"
        className={"bi bi-justify-left " + props.itemsLine + "-iteml"}
      >
        <svg
          width="2em"
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="5" y="11" style={{ fontSize: "10pt" }}>
            A
          </text>
          <rect width="21" height="5" x="0" y="12" fill="#ce2061"></rect>
        </svg>
      </button>
      {palitra(setRgb, rgb)}
    </div>
  );
}
