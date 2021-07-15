import React, { useEffect, useState } from "react";
import "./css/tablecolredactor.css";
export default function TableColRedactor(props) {
  const [col, setCol] = useState(0);
  const [colr, setColr] = useState(0);

  useEffect(() => {
    if (props.find !== undefined && props.find.tagName === "TD") {
      props.find.setAttribute("style", "width:" + col + "px");
      setColr(props.find.getAttribute("style"));
    }
  }, [col, props.find]);
  const STYLES = {
    close: {
      textAlign: "right"
    },
    but: {
      textAlign: "center"
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
                placeholder="0"
                aria-label="default input example"
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn btn-primary">
                Ок
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
