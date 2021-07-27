import React, { useEffect, useState } from "react";
import { countArray, createTable } from "./action/index";
export default function Tableinsertion(props) {
  const [styles, setStyles] = useState({ backgroundColor: "#ffffff" });

  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);

  return (
    <div className="tableinsertion boxes">
      <div className="col-sm mt-2  sittensTb text-left">
        {row < 0 || col < 0
          ? "Вставка таблицы"
          : "Таблица " + (row + 1) + " / " + (col + 1)}
      </div>
      <table onClick={() => createTable(props, row + 1, col + 1)}>
        <tbody>
          {countArray(6).map((x) => (
            <tr key={x + "tr"}>
              {countArray(6).map((x2) => (
                <td key={x2 + "td"}>
                  <div
                    onMouseOver={(e) => {
                      setCol(x2);
                      setRow(x);
                    }}
                    style={
                      col >= x2 && row >= x
                        ? { backgroundColor: "#cccccc" }
                        : {}
                    }
                  ></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="col-sm mt-2 sittensTb text-left"
        onClick={() => props.setDSittens(true)}
      >
        Настойки таблицы
      </div>
      <div
        className="col-sm mt-2 sittensTb text-left"
        onClick={() => props.setopenTb(true)}
      >
        Вставить таблицу
      </div>
    </div>
  );
}
