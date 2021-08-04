import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { countArray } from "./action/index";
export default function ColorsPanel(props) {
  const [row, setRow] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xSt, setXSt] = useState(200);
  const [ySt, setYSt] = useState(0);
  const [xAd, setXAd] = useState(0);
  const [yAd, setYAd] = useState(0);
  const [xMix, setXMix] = useState(0);
  const [yMix, setYMix] = useState(0);
  const [canv, setCanv] = useState({});
  const [color, setColor] = useState("0");
  const [colorGr, setColorGr] = useState("0");
  const [press, setPress] = useState(0);
  const [addColor, setAddColor] = useState(0);
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

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
    let hit = props.collige(0, 0, 200, 200, props.p5.mouseX, props.p5.mouseY, 200, 200,)
    if (hit && props.press === 1) {
      props.sX(props.p5.mouseX);
      props.sY(props.p5.mouseY);
    }
    let colors = props.p5.get(props.x, props.y);
    props.setColor(colors);
    
    
  
  }




  function colorPalete(props) {
    props.p5.colorMode(props.p5.HSB, props.w);
    for (let i = 0; i < props.w; i++) {
      for (let j = 0; j < props.w; j++) {
        props.p5.stroke(i, j, props.t);

      }
      props.p5.rect(i, props.y, 1, props.h);
    }
    props.p5.colorMode(props.p5.RGB, 100);
    props.p5.noStroke()
    countArray(100).map((x) => {
      let chj = props.p5.color(255, 100 - x);
      props.p5.fill(chj)
      props.p5.rect(0, x, 200, 1);
    })
    props.p5.colorMode(props.p5.RGB, 60);
    props.p5.noStroke()
    for (let x2 = 130; x2 < 200; x2++) {
      let chj2 = props.p5.color(0, x2 - 130);
      props.p5.fill(chj2)
      props.p5.rect(0, x2, 200, 1);
    }

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
    p5.createCanvas(200, 200).parent(canvasParentRef);
    p5.background(255);
    colorPalete({ p5: p5, x: 200, w: 200, t: 200, h: 200, y: 0 })


  };
  const draw = (p5) => {
    
    ellipseCursor({p5:p5, sX:setXAd,sY:setYAd,x:xAd,y:yAd,collige:collideRectRect,setColor:setColor,press:press})
   


  };

  function ellipsColor(e) {
    let r = 0;
    e.target.onmousemove = (ev) => {
       setX(ev.offsetX);
       setY(ev.offsetY - 200);
     }
     e.target.onmouseup = (ev) => {
      setX(ev.offsetX);
      setY(ev.offsetY - 200);
    }


  }

  return (
    <div>
      { x + "  /  " + y }
      <div style={{ width: "100px", height: "100px" }}></div>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <div>
                <div onMouseDownCapture = {(e)=>ellipsColor(e)}>
                  <Sketch
                    setup={setup}
                    draw={draw}
                    preload={preload}
                    mousePressed={mousePressed}
                    mouseReleased={mouseReleased}
                  />
                </div>
                <div style={{ position: "absolute", marginLeft: x + "px", marginTop: y + "px", background: "url('/img/cursor.png')", width: "20px", height: "20px" }}></div>
              </div>
            </td>
            <td style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]}` }}></td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}
