import React, { useEffect, useState } from "react";
import { countArray,createTable } from "./action/index";
export default function Tableinsertion(props) {
  const [styles, setStyles] = useState({ backgroundColor: "#ffffff" });
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);

  return (
    <table className="tableinsertion" onClick={()=>
      createTable(props,row + 1,col + 1)
    }>
     
      <tbody>
        {countArray(6).map((x) => (
          <tr key = {x + "tr"}>
            {countArray(6).map((x2) => (
              <td key = {x2 + "td"}>
                <div
                  data-col={x2}
                  data-row={x}
                  onMouseOver={(e) => {
                    let d = e.target.getAttribute("data-col");
                    let v = e.target.getAttribute("data-row");
                    setCol(x2);
                    setRow(x);
                  }}
                  style={col >= x2 && row >= x?{backgroundColor:"#cccccc"}:{} }
                ></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
