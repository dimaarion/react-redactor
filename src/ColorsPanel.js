import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { countArray } from "./action/index";
export default function ColorsPanel(props) {
  const [row, setRow] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xSt, setXSt] = useState(0);
  const [ySt, setYSt] = useState(240);
  const [xAd, setXAd] = useState(0);
  const [yAd, setYAd] = useState(0);
  const [canv, setCanv] = useState({});
  const [color, setColor] = useState("0");
  const [colorGr, setColorGr] = useState("0");
  const [press, setPress] = useState(0);
  const [addColor, setAddColor] = useState(0);


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

  function ControllerTriangle(props) {
    props.p5.fill(255);
    props.p5.stroke(255)
    props.p5.rect(0, props.len + 20, 270, props.h);
    props.p5.fill(0);
    props.p5.stroke(0);
    props.p5.triangle(props.x, 27 + props.len, 5 + props.x, 22 + props.len , 10 + props.x, 27 + props.len)
  }


  function setGradient(p5, c1, c2, w = 100, h = 100, l = 0) {
    for (var y = 0; y < h; y++) {
      var inter = p5.map(y, 0, h, 0, 1);
      var cl = p5.lerpColor(c1, c2, inter);
      p5.stroke(cl);
      p5.line(y, l, y, w);

    }
  }
  function setMultiGradient(p5, c1, c2, w = 100, h = 100, l = 0) {
    let left = w;
    p5.colorMode(p5.RGB, 100);
    for (var y = 0; y < h; y++) {
      for (let i = left; i < l; i++) {

        p5.stroke(i - left, y, 0);
        p5.point(i, y);
      }
    }


  }

  function basicPalet(p5, gr, cl, p = { color: 255, press: 0, x: 0, y: 0 }) {
    let c = 0;
    let c1;
    
    if (p.addColor[0] === 0 && p.addColor[1] === 0 && p.addColor[2] === 0) {
      c1 = p5.color(255, 0, 0);
    } else {
      c1 = p5.color(p.addColor);
    }

    let c2 = p5.color(p.color);
    gr(p5, c1, c2, 160, 255, 180);
    let hit = p.collige(p5, 0, 160, 255, 40, p5.mouseX, p5.mouseY, 1)
    if (p.press === 1 && hit) {
      p.setX(p5.mouseX);
      p.setY(p5.mouseY);


    }

    c = p5.get(p.x, p.y);
    cl(c);
    p5.fill(c)
    ControllerTriangle({p5:p5,len:160,x:p.x,h:20})

  }

  function settingGradient(p5, gr, cl, p) {
    let c1 = p5.color(0);
    let c2 = p5.color(255);
    let len = 195;
    let h = 20;
    let wR = 255;
    p5.push()

    countArray(wR).map((c, i) => {
      var inter = p5.map(i, 0, wR, 0, 1);
      var cl = p5.lerpColor(c1, c2, inter);
      p5.stroke(cl);
      p5.rect(c, len, 1, h);
    })
    p5.pop()
    let hit = p.collige(p5, 0, len, wR, h, p5.mouseX, p5.mouseY, 1);
    if (p.press === 1 && hit) {
      p.setXSt(p5.mouseX);
      p.setYSt(p5.mouseY);
    }
    let gCol = p5.get(p.x, p.y);
    cl(gCol);
    ControllerTriangle({p5:p5,len:len,x:p.x,h:h})
  }

  function addColorGradient(p5, gr, cl, p) {
    let rad = 10;
    let ot = (rad / 2);
    let c1 = p5.color(0);
    let c2 = p5.color(255);
    let h = 150;
    let lF = 0;
    let lA = 150;
    let wR = lA - lF;
    let hR = 5;
    let c = 0;
    gr(p5, c1, c2, lF, h, lA);
    let hit = p.collige(p5, lF + ot, ot, wR - rad, h - rad, p5.mouseX, p5.mouseY, 1);
    if (p.press === 1 && hit) {
      p.sX(p5.mouseX);
      p.sY(p5.mouseY);

    }
    c = p5.get(p.x, p.y);
    cl(c);
    p5.fill(h - p.y);
    // p5.ellipse(p.x, p.y, rad, rad);
  }


  function mousePressed(e) {
    setPress(1)
  }
  function mouseReleased(e) {
    setPress(0);

  }
  const preload = (p5) => {

  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 400).parent(canvasParentRef);

  };
  const draw = (p5) => {
    basicPalet(p5, setGradient, setColor, { color: colorGr, press: press, x: x, y: y, collige: collideRectCircle, setX: setX, setY: setY, addColor: addColor });
    settingGradient(p5, setGradient, setColorGr, { collige: collideRectCircle, setXSt: setXSt, setYSt: setYSt, x: xSt, y: ySt, press: press });
    addColorGradient(p5, setMultiGradient, setAddColor, { collige: collideRectCircle, sX: setXAd, sY: setYAd, x: xAd, y: yAd, press: press });


  };



  return (
    <div>
      {press}
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
                    mousePressed={mousePressed}
                    mouseReleased={mouseReleased}
                  />
                </div>
              </div>
            </td>
            <td style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]},${color[3]})` }}></td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}
