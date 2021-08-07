import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { countArray, isMetod,selectedStyles } from "./action/index";
import TitlesEl from "./TitlesEl";
export default function ColorsPanel(props) {
  const [xAd, setXAd] = useState(0);
  const [yAd, setYAd] = useState(0);
  const [color, setColor] = useState([]);
  const [press, setPress] = useState(0);
  const [naprav, setNaprav] = useState("none");
 

  useEffect(() => {
    let l = document.querySelector("."+props.select+"");    
    if (isMetod(props, "setRgb")) {
      props.setRgb( `rgb(${color[0]},${color[1]},${color[2]})`);
      if(xAd === 0 && yAd === 0){
         Object.values(l.children).filter((el)=>el.tagName === "rect").map((x)=>props.setRgb(x.getAttribute("fill")))
      }
     
    }
    if(isMetod(props, "setRgbInv")){
      props.setRgbInv(`rgb(${ 255 - color[0]},${ 255 -color[1]},${255 - color[2]})`);
    }
  }, [color])

  useEffect(()=>{
   
  },[props])


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
    let hit = props.collige(1, 1, 198, 198, props.p5.mouseX, props.p5.mouseY, 1, 1,)
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

  function keyBoardPressed(props) {
    let speed = 0.1
    let hit = props.collige(1, 1, 198, 198, props.p5.mouseX, props.p5.mouseY, 1, 1,);

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
    p5.createCanvas(200, 200).parent(canvasParentRef);
    p5.background(255);
    colorPalete({ p5: p5, x: 200, w: 200, t: 200, h: 200, y: 0 });

  };

  const draw = (p5) => {
    ellipseCursor({ p5: p5, sX: setXAd, sY: setYAd, x: xAd, y: yAd, collige: collideRectRect, setColor: setColor, press: press });
    keyBoardPressed({ p5: p5, setXAd: setXAd, setYAd: setYAd, xAd: xAd, yAd: yAd, naprav: naprav, collige: collideRectRect });


  };

  let colorArr = {
    gr1: [
      { id: 1, x: 0, y: 130, c: "red" },
      { id: 2, x: 33, y: 130, c: "yellow" },
      { id: 3, x: 67, y: 160, c: "green" },
      { id: 4, x: 99.5, y: 109, c: "aqua" },
      { id: 5, x: 132, y: 127, c: "blue" },
      { id: 6, x: 182, y: 92, c: "deepPink" },
      { id: 7, x: 8, y: 191, c: "black" }],
    gr2: [
      { id: 1, x: 6.80000000000002, y: 148.89999999999938, c: "FireBrick" },
      { id: 2, x: 28.599999999999937, y: 131.7999999999999, c: "Gold" },
      { id: 3, x: 44.29999999999989, y: 130.1000000000017, c: "GreenYellow" },
      { id: 4, x: 88.80000000000061, y: 51.30000000000238, c: "AquaMarine" },
      { id: 5, x: 108.30000000000055, y: 147.69999999999985, c: "SteelBlue" },
      { id: 6, x: 166.80000000000086, y: 117.79999999999853, c: "Fuchsia" },
      { id: 7, x: 8, y: 0, c: "White" }],
    gr3: [
      { id: 1, x: 6.80000000000002, y: 148.89999999999938, c: "FireBrick" },
      { id: 2, x: 28.599999999999937, y: 131.7999999999999, c: "Gold" },
      { id: 3, x: 44.29999999999989, y: 130.1000000000017, c: "GreenYellow" },
      { id: 4, x: 88.80000000000061, y: 51.30000000000238, c: "AquaMarine" },
      { id: 5, x: 108.30000000000055, y: 147.69999999999985, c: "SteelBlue" },
      { id: 6, x: 166.80000000000086, y: 117.79999999999853, c: "Fuchsia" }]
  };

  return (
    <div className="colorPanel">
      <table className="table">
        <tbody>
          <tr>
            <td>Цвет</td>
            <td className="text-right">
              <div className=" titlesBas"><TitlesEl  type="Закрыть" left = {150}/>
              <button type="button" className="tableButton">
                <svg
                  onClick={() => { if (isMetod(props, "setClose")) { props.setClose(false);} }}
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
              <div style={{ position: "absolute", marginLeft: xAd + 3 + "px", marginTop: yAd - 215 + "px", background: "url('/img/cursor.png')", width: "20px", height: "20px" }}></div>
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
                      "background-color:" + props.rgb + ";"
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
