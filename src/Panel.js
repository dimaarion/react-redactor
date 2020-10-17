import React, { useState, useEffect } from "react";
import Fonts from "./Fonts";
import Aligns from "./Aligns";
import FamelyF from "./FamelyF";
import Images from "./Images";
import Headers from "./Headers";
function Panel(props) {
  return (
    <div className="container">
      <div className="col row">
        <div className="col-3 row">
         <FamelyF/>
          <Fonts setfontPt={props.setfontPt} />
        </div>
       
        <Aligns/>
       <Images/>
     <Headers/>
      </div>
    </div>
  );
}
export default Panel;
