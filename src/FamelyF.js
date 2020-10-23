import React from "react";

function FamelyF(props) {
  return (
   <div className="col-sm-2 form-group text-left p-0">
      <select className="col-sm form-control custom-select" onChange={(e) => props.fontsFm(props.ititalTegs, props.items,e.target.value)}>
              {["Georgia", "Roboto", "Arial","Montserrat","Krona One"].map( font => 
                <option key={font}>{font}</option>
              )}
            </select>
          </div>
  );
}
export default FamelyF;