import React, { useState } from "react";
function Table(props) {
  const [col, setCol] = useState(4);
  const [str, setStr] = useState(2);
  const [openTb, setopenTb] = useState(false);
  const [width, setWidth] = useState("100%");
  const [float, setFloat] = useState("none");
  let arr_en = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let active = { padding: "2px", border: "solid 1px #cccccc" };
  return (
    <div>
      <button type="button" className="tableButton">
        <svg
          onClick={() => setopenTb(true)}
          width="2em"
          viewBox="0 0 16 16"
          className="bi bi-grid-3x2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5v-8zM1.5 3a.5.5 0 0 0-.5.5V7h4V3H1.5zM5 8H1v3.5a.5.5 0 0 0 .5.5H5V8zm1 0h4v4H6V8zm4-1H6V3h4v4zm1 1v4h3.5a.5.5 0 0 0 .5-.5V8h-4zm0-1V3h3.5a.5.5 0 0 1 .5.5V7h-4z"
          />
        </svg>
      </button>
      {openTb === true ? (
        <div className="tableRedactor">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Вставка таблицы</td>
                <td>
                  <svg
                    onClick={() => {
                      setopenTb(false);
                      props.setActive(props.active === false ? true : false);
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
              <tr>
                <td>Размер таблицы</td>
                <td> {`${col} / ${str}`}</td>
              </tr>
              <tr>
                <td>Число столбцов</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={col}
                    onChange={(e) => setCol(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Число строк</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={str}
                    onChange={(e) => setStr(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Ширина</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setWidth(e.target.value)}
                    value={width}
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right"></td>
                <td className="text-left">
                  <svg
                    style={float === "left" ? active : {}}
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
                  <svg
                    style={float === "none" ? active : {}}
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
                  <svg
                    style={float === "right" ? active : {}}
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
                <td className="text-left"></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button
                    type="button"
                    onClick={
                      col > 0 || str > 0
                        ? () => {
                            props.createTable(
                              props.baseSelector,
                              props.items,
                              width,
                              float
                            );
                            props.createTr(
                              props.baseSelector,
                              props.items,
                              arr_en,
                              str
                            );
                            props.createTd(
                              props.baseSelector,
                              props.items,
                              arr_en,
                              str,
                              col
                            );
                          }
                        : () => {}
                    }
                    type="button"
                    className="btn btn-primary "
                  >
                    Ок
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setopenTb(false);
                      props.setActive(props.active === false ? true : false);
                    }}
                    type="button"
                    class="btn btn-primary ml-2"
                  >
                    Отмена
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Table;
