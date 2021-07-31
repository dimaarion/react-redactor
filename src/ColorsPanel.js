import React, { useEffect, useState } from "react";
import { countArray } from "./action/index";
export default function ColorsPanel(props) {
  const [row, setRow] = useState(0);
  let styles = {
    colorDf: 255,
    minus: 0,
    widthDf: "15px",
    heightDf: "0.1px",
    top: "-5px"
  };

  let Colors = {
    rgb: [
      {
        id: 1,
        r: 0,
        g: 1,
        b: 1
      },
      {
        id: 2,
        r: 1,
        g: 0,
        b: 1
      },
      {
        id: 3,
        r: 1,
        g: 0,
        b: 0
      },
      {
        id: 4,
        r: 0,
        g: 0,
        b: 1
      },
      {
        id: 5,
        r: 0,
        g: 1,
        b: 0
      },
      {
        id: 6,
        r: 1,
        g: 1,
        b: 0
      },
      {
        id: 7,
        r: 0,
        g: 0,
        b: 0
      }
    ]
  };
  useEffect(() => {
    let lineGradient = document.getElementById("lineGradient");
    let ctx = lineGradient.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 100, 100);
  }, []);
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <div>
                <div
                  style={{
                    width: "255px",
                    height: "255px"
                  }}
                >
                  <canvas width="255" height="255" id="lineGradient"></canvas>
                </div>
              </div>
            </td>
            <td>
              <div>
                {countArray(255).map((c) => (
                  <div
                    style={{
                      width: styles.widthDf,
                      height: styles.heightDf,
                      backgroundColor: `rgb(${255},${0},${c})`
                    }}
                  ></div>
                ))}
                {countArray(255).map((c) => (
                  <div
                    style={{
                      width: styles.widthDf,
                      height: styles.heightDf,
                      backgroundColor: `rgb(${255 - c},${0},${255})`
                    }}
                  ></div>
                ))}
                {countArray(255).map((c) => (
                  <div
                    style={{
                      width: styles.widthDf,
                      height: styles.heightDf,
                      backgroundColor: `rgb(${0},${c},${255})`
                    }}
                  ></div>
                ))}
                {countArray(255).map((c) => (
                  <div
                    style={{
                      width: styles.widthDf,
                      height: styles.heightDf,
                      backgroundColor: `rgb(${0},${255},${255 - c})`
                    }}
                  ></div>
                ))}
                {countArray(255).map((c) => (
                  <div
                    style={{
                      width: styles.widthDf,
                      height: styles.heightDf,
                      backgroundColor: `rgb(${c},${255},${0})`
                    }}
                  ></div>
                ))}
                {countArray(255).map((c) => (
                  <div
                    style={{
                      width: styles.widthDf,
                      height: styles.heightDf,
                      backgroundColor: `rgb(${255},${255 - c},${0})`
                    }}
                  ></div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {row + " row "}
    </div>
  );
}
