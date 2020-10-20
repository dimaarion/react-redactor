import React from "react";
import Lineleft from "./Lineleft";
import Linecenter from "./Linecenter";
import Lineright from "./Lineright";
function Aligns(props) {
  return (
    <div className="col-2 aligns">
      <div className="row text-left">
        <div onClick={() => props.setalign("left")} className="col">
          <Lineleft/>
        </div>
        <div className="col" onClick={() => props.setalign("center")}>
          <Linecenter/>
        </div>
        <div className="col" onClick={() => props.setalign("right")}>
         <Lineright/>
        </div>
      </div>
    </div>
  );
}
export default Aligns;
