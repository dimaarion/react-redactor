import React from "react";

function FamelyF(props) {
  return (
   <div className="col-8 form-group text-left p-0">
            <select className="col form-control custom-select"  onChange = {(e)=>props.setfontFm(e.target.value)}>
              {["Georgia", "Roboto", "Arial","Montserrat"].map( font => 
                <option key={font}>{font}</option>
              )}
            </select>
          </div>
  );
}
export default FamelyF;