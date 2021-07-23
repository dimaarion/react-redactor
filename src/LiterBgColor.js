import React, { useEffect, useState } from "react";
import { selectedStyles, countArray } from "./action/index";
import TitlesEl from "./TitlesEl";
import "./css/palitra.css";
export default function LiterBgColor(props) {
  const [rgb, setRgb] = useState("rgb(255, 0, 255)");
  const [rgbInv, setRgbInv] = useState("rgb(255, 255, 255)");
  const [r, setR] = useState(80);
  const [g, setG] = useState(80);
  const [b, setB] = useState(80);
  const [close, setClose] = useState(false);

  useEffect(() => {
    setRgbInv(`rgb(${r},${g},${b})`);
  }, [r, g, b, rgb]);
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
            <td className="titlesBas">
              <TitlesEl type="Закрыть" left={60} />
              <button type="button" className="tableButton">
                <svg
                  onClick={() => setClose(false)}
                  width="2em"
                  viewBox="0 0 16 16"
                  className="bi bi-grid-3x2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
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
                  selectedStyles(
                    props,
                    "span",
                    false,
                    "background-color:" + rgb + ";"
                  );
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
      <div className="titlesBas">
        <TitlesEl type="Выделение" />
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
            <rect width="21" height="21" x="0" y="0" fill={rgb}></rect>
            <text x="5" y="14" style={{ fontSize: "10pt", color: rgbInv }}>
              A
            </text>
          </svg>
        </button>
      </div>

      {close === true ? palitra() : ""}
    </div>
  );
}
