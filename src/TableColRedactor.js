import React, { useEffect, useState } from "react";
import { addCell, deleteCell, addStr, deleteStr } from "./action/index";
import "./css/tablecolredactor.css";
export default function TableColRedactor(props) {
  const [col, setCol] = useState("100");
  const [row, setRow] = useState("50");
  const [colr, setColr] = useState("");
  const [rowr, setRowr] = useState("");
  const [colorr, setColorr] = useState("#ffffff");

  useEffect(() => {
    if (props.find !== undefined && props.find.tagName === "TD") {
      if (props.find.getAttribute("style") !== null) {
        setColr(props.find.style.width.replace(/[a-z\-;:]/g, ""));
        setRowr(props.find.style.height.replace(/[a-z\-;:]/g, ""));
      }
    }
  }, [props.find, colr, rowr]);

  useEffect(() => {
    if (props.find !== undefined && props.find.tagName === "TD") {
      if (props.find.getAttribute("style") !== null) {
        if (props.find.getAttribute("style").split(";")[3] !== undefined) {
          let red = document
            .querySelector(".tablecolredactor")
            .querySelector(".color");
          let redBorder = document
            .querySelector(".tablecolredactor")
            .querySelector(".colorBorder");
          let borderH = document
            .querySelector(".tablecolredactor")
            .querySelector(".borderH");
          let merge = document
            .querySelector(".tablecolredactor")
            .querySelector(".merge");
          let borderHnum = props.find
            .getAttribute("style")
            .split(";")[3]
            .replace(/[a-z;:-]/g, "")
            .match(/[0-9]{1}/)[0];
          let pregBorder = `border:solid ${borderHnum}px`;
          red.value = props.find
            .getAttribute("style")
            .split(";")[2]
            .replace(/background-color:/, "");
          redBorder.value = props.find
            .getAttribute("style")
            .split(";")[3]
            .replace(pregBorder, "");
          borderH.value = borderHnum;
          merge.value = props.find.getAttribute("colspan");
        }
      }
    }
  }, [props.find]);
  useEffect(() => {
    if (props.find !== undefined && props.find.tagName === "TD") {
    }
  }, [props.find]);

  const STYLES = {
    close: {
      textAlign: "right"
    },
    butOk: {
      textAlign: "right"
    },
    butOt: {
      textAlign: "left"
    },
    borderH: {
      marginTop: "-15px"
    }
  };
  return (
    <div className="tableRedactor tablecolredactor">
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Настройки таблицы</td>
            <td style={STYLES.close} colSpan="3">
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
                defaultValue={colr}
              />
            </td>
            <td>
              <div className="row">
                <div className="p-2" style={STYLES.borderH}>
                  Объеденить<br></br> ячейки
                </div>
                <input
                  className="form-control col-sm-5 merge"
                  type="number"
                  min="1"
                  defaultValue={1}
                />
              </div>
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
            <td>
              <button
                type="button"
                className="btn btn-primary m-1"
                onClick={() => {
                  addCell(props);
                }}
              >
                Добавить ячейку
              </button>
              <button
                type="button"
                className="btn btn-primary m-1"
                onClick={() => {
                  deleteCell(props);
                }}
              >
                Удалить ячейку
              </button>
            </td>
          </tr>
          <tr>
            <td>Цвет ячейки</td>
            <td>
              <input
                className="form-control color"
                type="color"
                defaultValue="#ffffff"
              />
            </td>
            <td>
              <button
                type="button"
                className="btn btn-primary m-1"
                onClick={() => {
                  addStr(props);
                }}
              >
                Добавить строку
              </button>
              <button
                type="button"
                className="btn btn-primary m-1"
                onClick={() => {
                  deleteStr(props);
                }}
              >
                Удалить строку
              </button>
            </td>
          </tr>
          <tr>
            <td>Цвет границ ячейки</td>
            <td>
              <input
                className="form-control colorBorder"
                type="color"
                defaultValue="#cccccc"
              />
            </td>
            <td>
              <div className="row">
                <div className="p-2" style={STYLES.borderH}>
                  Толщина <br></br> границ
                </div>
                <input
                  className="form-control borderH col-sm-5"
                  type="number"
                  defaultValue="1"
                  min="1"
                  max="10"
                  step="1"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={STYLES.butOk}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  if (props.find !== undefined && props.find.tagName === "TD") {
                    let red = document
                      .querySelector(".tablecolredactor")
                      .querySelector(".color");
                    let redBorder = document
                      .querySelector(".tablecolredactor")
                      .querySelector(".colorBorder");
                    let borderH = document
                      .querySelector(".tablecolredactor")
                      .querySelector(".borderH");
                    let merge = document
                      .querySelector(".tablecolredactor")
                      .querySelector(".merge");
                    props.find.setAttribute(
                      "style",
                      "width:" +
                        col +
                        "px;height:" +
                        row +
                        "px;background-color:" +
                        red.value +
                        ";border:solid " +
                        borderH.value +
                        "px" +
                        redBorder.value +
                        ";"
                    );
                    props.find.setAttribute("colspan", merge.value);
                  }
                }}
              >
                Ок
              </button>
            </td>
            <td style={STYLES.butOt} colSpan="3">
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
