import React, { useEffect, useState } from "react";
import "./css/tablecolredactor.css";
export default function TableColRedactor(props) {
  const [col, setCol] = useState("100");
  const [row, setRow] = useState("50");
  const [colr, setColr] = useState("");
  const [rowr, setRowr] = useState("");
  const [colorr, setColorr] = useState("");
  const [color, setColor] = useState("#000000");
  const [val, setVal] = useState(false);

  useEffect(() => {
    if (props.find !== undefined && props.find.tagName === "TD") {
      if (props.find.getAttribute("style") !== null) {
        setColr(props.find.style.width.replace(/[a-z\-;:]/g, ""));
        setRowr(props.find.style.height.replace(/[a-z\-;:]/g, ""));
        setColorr(props.find.style.backgroundColor);
        console.log(props.find.getAttributeNS("style", "background-color"));
      }
    }
  }, [props.find, colr, rowr, colorr]);

  const STYLES = {
    close: {
      textAlign: "right"
    },
    butOk: {
      textAlign: "right"
    },
    butOt: {
      textAlign: "left"
    }
  };
  return (
    <div className="tableRedactor tablecolredactor">
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Настройки таблицы</td>
            <td style={STYLES.close}>
              <svg
                onClick={() => {
                  props.setDSittens(false);
                }}
                width="2em"
                viewBox="0 0 16 16"
                className="bi bi-x"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ширина столбца</td>
            <td>
              <input
                onChange={(e) => setCol(e.target.value)}
                className="form-control "
                type="text"
                placeholder={colr}
                defaultValue={colr}
              />
            </td>
          </tr>
          <tr>
            <td>Высота строки</td>
            <td>
              <input
                onChange={(e) => setRow(e.target.value)}
                className="form-control "
                type="text"
                placeholder={rowr}
                defaultValue={rowr}
              />
            </td>
          </tr>
          <tr>
            <td>Цвет ячейки</td>
            <td>
              <input
                onChange={(e) => setColor(e.target.value)}
                className="form-control "
                type="color"
                defaultValue={colorr}
              />
            </td>
          </tr>
          <tr>
            <td style={STYLES.butOk}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  if (props.find !== undefined && props.find.tagName === "TD") {
                    props.find.setAttribute(
                      "style",
                      "width:" +
                        col +
                        "px;height:" +
                        row +
                        "px;background-color:" +
                        color +
                        ";"
                    );
                  }
                }}
              >
                Ок
              </button>
            </td>
            <td style={STYLES.butOt}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  props.setDSittens(false);
                }}
              >
                Отмена
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
