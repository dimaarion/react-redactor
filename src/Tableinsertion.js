import React, { useState } from "react";
import { countArray } from "./action/index";
export default function Tableinsertion(props) {
  const [styles, setStyles] = useState({ backgroundColor: "#ffffff" });
  return (
    <table className="tableinsertion">
      <tbody>
        {countArray(6).map((x) => (
          <tr>
            {countArray(6).map((x2) => (
              <td>
                <div
                  onMouseOver={() => setStyles({ backgroundColor: "#cccccc" })}
                  style={styles}
                ></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
