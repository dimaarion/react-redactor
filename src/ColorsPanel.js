import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { countArray } from "./action/index";
export default function ColorsPanel(props) {
  const [row, setRow] = useState(0);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [canv, setCanv] = useState({});
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
  let imges;
  const preload = (p5) => {
    imges = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/gBkC-scena.png"
    );
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(255, 255).parent(canvasParentRef);
    // p5.background(255);
  };
  const draw = (p5) => {
    p5.rect(p5.mouseX, p5.mouseY, 10, 10);
    p5.image(imges, 10, 10, 10, 10);
    // p5.background(255);
    // p5.image(imges, p5.mouseX, p5.mouseY, 10, 10);
    //p5.background("red");
    // p5.fill(100);
    // p5.rect(p5.mouseX, p5.mouseY, 10, 10);
  };
  const keyPressed = (p5) => {};
  const keyReleased = (p5) => {};
  function pick(event) {}

  return (
    <div>
      <div style={{ width: "100px", height: "100px" }}></div>
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
                  <Sketch
                    setup={setup}
                    draw={draw}
                    preload={preload}
                    keyPressed={keyPressed}
                    keyReleased={keyReleased}
                  />
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
