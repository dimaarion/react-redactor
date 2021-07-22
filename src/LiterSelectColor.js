import React, { useState } from "react";
import { selectedStyles, countArray, rgb2hex } from "./action/index";
import "./css/palitra.css";
export default function LiterSelectColor(props) {
  const [rgb, setRgb] = useState([]);
  const [r, setR] = useState(255);
  const [g, setG] = useState(255);
  const [b, setB] = useState(255);
  const [close, setClose] = useState(false);
  function palitra() {
    return (
      <table
        className="palitra"
        style={{ position: "absolute", width: "300px", height: "300px" }}
      >
        <tbody>
          <tr>
            <td colSpan="3">
              <h4>Цвет</h4>
            </td>
            <td className="closePalitr" onClick={() => setClose(false)}>
              <h2>
                <div>&times;</div>
              </h2>
            </td>
          </tr>
          {countArray(4).map((n) => (
            <tr key={n + 2 + "r"}>
              {countArray(4).map((j) => (
                <td key={j + 300 + "g"}>
                  <table>
                    <tbody>
                      <tr>
                        {countArray(14).map((l) => (
                          <td
                            key={l * 4000 + "b"}
                            onClick={(e) => {
                              setRgb(e.target.style.backgroundColor);
                            }}
                            style={{
                              width: "10px",
                              height: "50px",
                              backgroundColor:
                                "rgb(" +
                                Math.floor(255 - r * (n + 1)) +
                                "," +
                                Math.floor(255 - g * (j + 1)) +
                                "," +
                                Math.floor(255 - b * (l + 1)) +
                                ")"
                            }}
                          ></td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan="6">
              <label id="customRange1" className="form-label pr-2">
                R
              </label>
              <input
                type="range"
                onChange={(e) => setR(e.target.value)}
                className="form-range"
                min="0"
                max="255"
                step="1"
                id="customRange1"
                defaultValue={255}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              <label id="customRange2" className="form-label pr-2">
                G
              </label>
              <input
                type="range"
                onChange={(e) => setG(e.target.value)}
                className="form-range"
                min="0"
                max="255"
                step="1"
                id="customRange2"
                defaultValue={255}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              <label id="customRange3" className="form-label pr-2">
                B
              </label>
              <input
                type="range"
                onChange={(e) => setB(e.target.value)}
                className="form-range"
                min="0"
                max="255"
                step="1"
                defaultValue={255}
                id="customRange3"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => {
                  selectedStyles(props, "span", false, "color:" + rgb + ";");
                }}
              >
                ok
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <div className="listItems">
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
        >
          <text x="5" y="11" style={{ fontSize: "10pt" }}>
            A
          </text>
          <rect width="21" height="5" x="0" y="12" fill={rgb}></rect>
        </svg>
      </button>
      {close === true ? palitra() : ""}
    </div>
  );
}
