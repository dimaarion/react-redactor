import React, { useEffect, useState } from "react";
import { addCell, deleteCell, addStr, deleteStr } from "./action/index";
import "./css/tablecolredactor.css";
export default function TableColRedactor(props) {
  const [col, setCol] = useState("100");
  const [row, setRow] = useState("50");
  const [colr, setColr] = useState("");
  const [rowr, setRowr] = useState("");
  const [float, setFloat] = useState("none");
  const [width, setWidth] = useState("100");
  const [ed, setEd] = useState("%");
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
      let widthTb = document
        .querySelector(".tablecolredactor")
        .querySelector(".widthTb");
      let widthEd = props.find.parentElement.parentElement.style.width
        .match(/[px | % ]/g)
        .join()
        .replace(/[,]/g, "");
      let selectTb = document
        .querySelector(".tablecolredactor")
        .querySelector(".selectTb");

      selectTb.value = widthEd;
      widthTb.value = props.find.parentElement.parentElement.style.width.replace(
        /[px|%]/g,
        ""
      );
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
    borderH: {}
  };
  return (
    <div className="tableRedactor tablecolredactor boxes">
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
            <td>Ширина таблицы</td>
            <td></td>
            <td>
              <div className="row p-3">
                <input
                  type="text"
                  className="form-control col-sm widthTb"
                  onChange={(e) => setWidth(e.target.value)}
                  value={width}
                />
                <select
                  defaultValue={"px"}
                  className="form-control col-sm-5 selectTb"
                  onChange={(e) => setEd(e.target.value)}
                >
                  <option value="%">%</option>
                  <option value="px">px</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ширина столбца</p>
              <input
                onChange={(e) => setCol(e.target.value)}
                className="form-control "
                type="text"
                defaultValue={colr}
              />
            </td>
            <td></td>
            <td>
              <p>Объеденить ячейки</p>
              <input
                className="form-control col-sm-6 merge"
                type="number"
                min="1"
                defaultValue={1}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Высота строки</p>
              <input
                onChange={(e) => setRow(e.target.value)}
                className="form-control "
                type="text"
                placeholder={rowr}
                defaultValue={rowr}
              />
            </td>
            <td></td>
            <td>
              <button
                type="button"
                className="btnTab p-2"
                onClick={() => {
                  addCell(props);
                }}
              >
                Добавить ячейку
              </button>
              <button
                type="button"
                className="btnTab p-2"
                onClick={() => {
                  deleteCell(props);
                }}
              >
                Удалить ячейку
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p>Цвет ячейки</p>
              <input
                className="form-control color"
                type="color"
                defaultValue="#ffffff"
              />
            </td>
            <td></td>
            <td>
              <button
                type="button"
                className="p-2 btnTab"
                onClick={() => {
                  addStr(props);
                }}
              >
                Добавить строку
              </button>
              <button
                type="button"
                className="p-2 btnTab"
                onClick={() => {
                  deleteStr(props);
                }}
              >
                Удалить строку
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p>Цвет границ ячейки</p>
              <input
                className="form-control colorBorder"
                type="color"
                defaultValue="#cccccc"
              />
            </td>
            <td></td>
            <td>
              <p>Толщина границ</p>
              <input
                className="form-control borderH col-sm-5"
                type="number"
                defaultValue="1"
                min="1"
                max="10"
                step="1"
              />
            </td>
          </tr>
          <tr>
            <td className="text-left" colspan="3">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <svg
                        onClick={() => setFloat("left")}
                        width="2em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </td>
                    <td className="text-center">
                      <svg
                        onClick={() => setFloat("none")}
                        width="2em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </td>
                    <td className="text-center">
                      <svg
                        onClick={() => setFloat("right")}
                        width="2em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={STYLES.butOk}>
              <button
                type="button"
                className="p-2 btnTab"
                onClick={() => {
                  if (props.find !== undefined && props.find.tagName === "TD") {
                    if (
                      props.find.parentElement !== null &&
                      props.find.parentElement.parentElement.tagName === "TABLE"
                    ) {
                      props.find.parentElement.parentElement.style.float = float;
                      props.find.parentElement.parentElement.style.width =
                        width + ed;
                    }

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
                Сохранить
              </button>
            </td>
            <td style={STYLES.butOt} colSpan="3">
              <button
                type="button"
                className="p-2 btnTab"
                onClick={() => {
                  props.setDSittens(false);
                }}
              >
                Закрыть
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
