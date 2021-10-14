import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { countArray, isMetod, selectedStyles, colorSvg } from "./action/index";
import TitlesEl from "./TitlesEl";
export default function ColorsPanel(props) {
  const [xAd, setXAd] = useState(0);
  const [yAd, setYAd] = useState(0);
  const [color, setColor] = useState([]);
  const [press, setPress] = useState(0);
  const [naprav, setNaprav] = useState("none");


  useEffect(() => {

    if (isMetod(props, "setRgb")) {
      props.setRgb(`rgb(${color[0]},${color[1]},${color[2]})`);


    }
    if (isMetod(props, "setRgbInv")) {
      props.setRgbInv(`rgb(${255 - color[0]},${255 - color[1]},${255 - color[2]})`);
    }
  }, [color])

  useEffect(() => {
    let l = document.querySelector("." + props.select + "");
    if (xAd === 0 && yAd === 0) {
      Object.values(l.children).filter((el) => el.tagName === "rect").map((x) => { props.setRgb(x.getAttribute("fill")); x.getAttribute("fill") })
    }
  }, [xAd, yAd, color])


  const collideRectRect = function (x, y, w, h, x2, y2, w2, h2) {
    //2d
    //add in a thing to detect rectMode CENTER
    if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
      return true;
    }
    return false;
  };

  const collideCircleCircle = function (p5, x, y, d, x2, y2, d2) {
    if (p5.dist(x, y, x2, y2) <= (d / 2) + (d2 / 2)) {
      return true;
    }
    return false;
  };

  const collideRectCircle = function (p5, rx, ry, rw, rh, cx, cy, diameter) {
    //2d
    // temporary variables to set edges for testing
    var testX = cx;
    var testY = cy;

    // which edge is closest?
    if (cx < rx) {
      testX = rx       // left edge
    } else if (cx > rx + rw) { testX = rx + rw }   // right edge

    if (cy < ry) {
      testY = ry       // top edge
    } else if (cy > ry + rh) { testY = ry + rh }   // bottom edge

    // // get distance from closest edges
    var distance = p5.dist(cx, cy, testX, testY)

    // if the distance is less than the radius, collision!
    if (distance <= diameter / 2) {
      return true;
    }
    return false;
  };



  function ellipseCursor(props) {
    let hit = props.collige(1, 1, 219, 230, props.p5.mouseX, props.p5.mouseY, 1, 1,)
    if (hit && props.press === 1) {
      props.sX(props.p5.mouseX);
      props.sY(props.p5.mouseY);
    }
    let colors = props.p5.get(props.x, props.y);
    props.setColor(colors);

  }




  function colorPalete(props) {
    props.p5.colorMode(props.p5.HSB, 200);
    for (let i = -1; i < props.w; i++) {
      for (let j = 0; j < props.w; j++) {
        props.p5.stroke(i, j, props.t);
      }
      props.p5.rect(i, props.y, 1, props.h);
    }

    props.p5.colorMode(props.p5.RGB, 100);
    props.p5.noStroke()
    props.p5.fill(100, 0, 0)
    props.p5.rect(199, 0, 7, 230)
    countArray(100).map((x) => {
      let chj = props.p5.color(100, 100 - x);
      props.p5.fill(chj)
      props.p5.rect(0, x, 220, 1.5);
    })

    props.p5.colorMode(props.p5.RGB, 100);
    props.p5.noStroke()
    for (let x2 = 110; x2 < 230; x2++) {
      let chj2 = props.p5.color(0, (x2 - 110) / 1.1);
      props.p5.fill(chj2)
      props.p5.rect(0, x2, 220, 1);
    }

    /*countArray(200).map((x) => {
      let clr = props.p5.color(0,x/10);
      props.p5.fill(clr);
      props.p5.rect(x, 200, 10, 30);
    });*/

  }

  function keyBoardPressed(props) {
    let speed = 0.1
    let hit = props.collige(1, 1, 198, 230, props.p5.mouseX, props.p5.mouseY, 1, 1,);

    if (props.naprav === "a") {
      setXAd(props.xAd - speed)
    } else if (props.naprav === "d") {
      setXAd(props.xAd + speed)
    } else if (props.naprav === "w") {
      setYAd(props.yAd - speed)
    } else if (props.naprav === "s") {
      setYAd(props.yAd + speed)
    }


  }

  function mousePressed(e) {
    setPress(1)
  }
  function mouseReleased(e) {
    setPress(0);
  }

  function keyPressed(e) {

    if (e.key === "d") {
      setNaprav("d");
    } else if (e.key === "a") {
      setNaprav("a");
    } else if (e.key === "w") {
      setNaprav("w");
    } else if (e.key === "s") {
      setNaprav("s");
    }
  }

  function keyReleased() {
    setNaprav("none");

  }


  const preload = (p5) => {

  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(220, 230).parent(canvasParentRef);
    p5.background(255);
    colorPalete({ p5: p5, x: 200, w: 200, t: 200, h: 230, y: 0 });

  };

  const draw = (p5) => {
    ellipseCursor({ p5: p5, sX: setXAd, sY: setYAd, x: xAd, y: yAd, collige: collideRectRect, setColor: setColor, press: press });
    keyBoardPressed({ p5: p5, setXAd: setXAd, setYAd: setYAd, xAd: xAd, yAd: yAd, naprav: naprav, collige: collideRectRect });


  };

  let colorArr = {
    gr1: [
      { id: 1, x: 199.69999999999993, y: 108.79999999999984, c: "red" },
      { id: 2, x: 199.5, y: 160.69999999999752, c: "DarkRed" },
      { id: 3, x: 4.6, y: 143.0000000000004, c: "FireBrick" },
      { id: 4, x: 191.80000000000038, y: 121.29999999999998, c: "Crimson" },
      { id: 5, x: 9.099999999999977, y: 66.60000000000144, c: "LightSalmon" },
      { id: 6, x: 7.799999999999995, y: 66.00000000000011, c: "DarkSalmon" },
      { id: 7, x: 2.400000000000018, y: 69.40000000000015, c: "Salmon" }],
    gr2: [
      { id: 1, x: 32.19999999999997, y: 109.89999999999984, c: "Yellow" },
      { id: 2, x: 27.39999999999994, y: 109.5000000000019, c: "Gold" },
      { id: 3, x: 32.400000000000055, y: 140.6000000000006, c: "DarkKhaki" },
      { id: 4, x: 25.699999999999974, y: 59.200000000004366, c: "Khaki" },
      { id: 5, x: 23.79999999999999, y: 47.19999999999983, c: "PaleGoldenrod" },
      { id: 6, x: 15.599999999999882, y: 41.199999999999974, c: "PeachPuff" },
      { id: 7, x: 20.5, y: 43.400000000000034, c: "Moccasin" }],
    gr3: [
      { id: 1, x: 212.5, y: 224.2, c: "black" },
      { id: 2, x: 210.29999999999973, y: 184, c: "DimGrey" },
      { id: 3, x: 210.3999999999999, y: 173.60000000000036, c: "Grey" },
      { id: 4, x: 210.89999999999986, y: 153.00000000000108, c: "DarkGrey" },
      { id: 5, x: 211.6, y: 141.80000000000064, c: "Silver" },
      { id: 6, x: 210.39999999999995, y: 132.1000000000005, c: "LightGray" },
      { id: 7, x: 210.7, y: 127.50000000000122, c: "Gainsboro" }],
    green: [
      { id: 1, x: 65.90000000000038, y: 165.29999999999646, c: "green" },
      { id: 2, x: 64.90000000000043, y: 177.59999999999576, c: "DarkGreen" },
      { id: 3, x: 73.19999999999949, y: 160.10000000000102, c: "ForestGreen" },
      { id: 4, x: 86.69999999999925, y: 160.79999999999978, c: "SeaGreen" },
      { id: 5, x: 86.59999999999886, y: 143.70000000000132, c: "MediumSeaGreen" },
      { id: 6, x: 82.49999999999909, y: 110.6000000000032, c: "SpringGreen" },
      { id: 7, x: 86.39999999999887, y: 112.70000000000309, c: "MediumSpringGreen" }],
    aqua: [
      { id: 1, x: 99.79999999999833, y: 110.20000000000141, c: "Aqua" },
      { id: 2, x: 100.10000000000008, y: 130.59999999999883, c: "DarkTurquoise" },
      { id: 3, x: 98.00000000000014, y: 130.7999999999978, c: "MediumTurquoise" },
      { id: 4, x: 97.20000000000019, y: 124.89999999999966, c: "Turquoise" },
      { id: 5, x: 88.30000000000058, y: 64.50000000000162, c: "Aquamarine" },
      { id: 6, x: 106.79999999999959, y: 45.40000000000002, c: "PaleTurquoise" },
      { id: 7, x: 99.8000000000001, y: 21.199999999999605, c: "LightCyan" }],
    blue: [
      { id: 1, x: 133.00000000000009, y: 110.3000000000005, c: "Blue" },
      { id: 2, x: 126.10000000000059, y: 172.59999999999798, c: "MidnightBlue" },
      { id: 3, x: 125.30000000000047, y: 85.69999999999996, c: "RoyalBlue" },
      { id: 4, x: 137.8999999999997, y: 72.29999999999998, c: "MediumSlateBlue" },
      { id: 5, x: 122.30000000000115, y: 73.49999999999957, c: "CornflowerBlue" },
      { id: 6, x: 115.60000000000079, y: 95.39999999999878, c: "DodgerBlue" },
      { id: 7, x: 107.70000000000039, y: 101.39999999999964, c: "DeepSkyBlue" }],
    fuchsia: [
      { id: 1, x: 166.4, y: 110.59999999999911, c: "Fuchsia" },
      { id: 2, x: 165.7999999999992, y: 164.69999999999905, c: "Purple" },
      { id: 3, x: 151.89999999999958, y: 164, c: "Indigo" },
      { id: 4, x: 155.40000000000035, y: 129.40000000000032, c: "DarkViolet" },
      { id: 5, x: 7.600000000000028, y: 149.29999999999947, c: "Brown" },
      { id: 6, x: 0.30000000000002053, y: 165.40000000000026, c: "Maroon" },
      { id: 7, x: 15.399999999999983, y: 160.69999999999956, c: "SaddleBrown" }]
  };

  return (
    <div className="colorPanel">
      <table className="table">
        <tbody>
          <tr>
            <td>Цвет</td>
            <td className="text-right">
              <div className=" titlesBas"><TitlesEl type="Закрыть" left={150} />
                <button type="button" className="tableButton" onClick={() => { if (isMetod(props, "setClose")) { props.setClose(false); } }}>
                  <svg

                    width="2em"
                    viewBox="0 0 16 16"
                    className="bi bi-grid-3x2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>

            </td>
          </tr>
          <tr>
            <td className="palete" rowSpan="2">
              <div >
                <Sketch
                  setup={setup}
                  draw={draw}
                  preload={preload}
                  mousePressed={mousePressed}
                  mouseReleased={mouseReleased}
                  keyPressed={keyPressed}
                  keyReleased={keyReleased}
                />
              </div>
              <div style={{ position: "absolute", marginLeft: xAd + 3 + "px", marginTop: yAd - 245 + "px", width: "20px", height: "20px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-circle" viewBox="0 0 20 20">
                <circle cx = "10" cy = "10" r = "8"/>
                <circle fill = "#ffffff" cx = "10" cy = "10" r = "5"/>
              </svg>
              </div>
            </td>
            <td className="rezPalete" style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]}` }} ></td>

          </tr>
          <tr>
            <td>
              <div className="basicColor">
                <div className="row">
                  {colorArr.gr1.map((cl) => <div className="bsEl" onClick={(e) => {
                    setXAd(cl.x);
                    setYAd(cl.y);
                  }} key={cl.c} style={{ backgroundColor: cl.c }}></div>)}
                </div>
                <div className="row">
                  {colorArr.gr2.map((cl) => <div className="bsEl" onClick={(e) => {
                    setXAd(cl.x);
                    setYAd(cl.y);
                  }} key={cl.c} style={{ backgroundColor: cl.c }}></div>)}
                </div>
                <div className="row">
                  {colorArr.green.map((cl) => <div className="bsEl" onClick={(e) => {
                    setXAd(cl.x);
                    setYAd(cl.y);
                  }} key={cl.c} style={{ backgroundColor: cl.c }}></div>)}
                </div>
                <div className="row">
                  {colorArr.aqua.map((cl) => <div className="bsEl" onClick={(e) => {
                    setXAd(cl.x);
                    setYAd(cl.y);
                  }} key={cl.c} style={{ backgroundColor: cl.c }}></div>)}
                </div>
                <div className="row">
                  {colorArr.blue.map((cl) => <div className="bsEl" onClick={(e) => {
                    setXAd(cl.x);
                    setYAd(cl.y);
                  }} key={cl.c} style={{ backgroundColor: cl.c }}></div>)}
                </div>
                <div className="row">
                  {colorArr.fuchsia.map((cl) => <div className="bsEl" onClick={(e) => {
                    setXAd(cl.x);
                    setYAd(cl.y);
                  }} key={cl.c} style={{ backgroundColor: cl.c }}></div>)}
                </div>
                <div className="row">
                  {colorArr.gr3.map((cl) => <div className="bsEl" onClick={(e) => {
                    setXAd(cl.x);
                    setYAd(cl.y);
                  }} key={cl.c} style={{ backgroundColor: cl.c }}></div>)}
                </div>
              </div>
            </td>

          </tr>
          <tr>
            <td>
              <button
                type="button"
                className="btnTab "
                onClick={() => {
                  if (isMetod(props, "params")) {
                    selectedStyles(
                      props.params,
                      props.element,
                      false,
                      props.styles + ":" + props.rgb + ";"
                    );
                  }

                }}
              >
                ok
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
