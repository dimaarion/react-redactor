import React, { useState } from "react";
import { selectedStyles, countArray } from "./action/index";
import TitlesEl from "./TitlesEl";
import "./css/palitra.css";
export default function LiterLineSelectBgColor(props) {
  const [rgb, setRgb] = useState([]);
  const [r, setR] = useState(80);
  const [g, setG] = useState(80);
  const [b, setB] = useState(80);
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
                    "div",
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
      <div className=" titlesBas">
        <TitlesEl type="Заливка" />
        <button
          onClick={() => {
            setClose(true);
          }}
          type="button"
          className={"bi bi-justify-left " + props.itemsLine + "-iteml"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            fill="currentColor"
            className="bi bi-paint-bucket"
            viewBox="0 0 16 16"
          >
            <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" />
            <rect width="21" height="5" x="0" y="12" fill={rgb}></rect>
          </svg>
        </button>
      </div>

      {close === true ? palitra() : ""}
    </div>
  );
}
