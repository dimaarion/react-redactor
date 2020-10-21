import React, { useState, useEffect } from "react";
import Fonts from "./Fonts";
import Aligns from "./Aligns";
import FamelyF from "./FamelyF";
import Images from "./Images";
import Headers from "./Headers";
import ImgRemove from "./ImgRemove";
function Panel(props) {
  return (
    <div className="container">
      <div className="col row">
        <div className="col-3 row">
         <FamelyF setfontFm = {props.setfontFm}/>
          <Fonts setfontPt={props.setfontPt} />
        </div>
       
        <Aligns setalign = {props.setalign}/>
       <Images/>
     <Headers settextbl = {props.settextbl} setitemss={props.setitemss}/>
      </div>
      <ImgRemove setimgWidth = {props.setimgWidth} setimgHeight = {props.setimgHeight}/>
    </div>
  );
}
export default Panel;
