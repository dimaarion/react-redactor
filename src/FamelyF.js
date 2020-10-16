import React from "react";

function FamelyF(props) {
  return (
   <div className="col-8 form-group text-left p-0">
            <select className="col form-control custom-select">
              {["Tahoma", "Verdana", "Arial"].map((font, i) => (
                <option key={i + 14}>{font}</option>
              ))}
            </select>
          </div>
  );
}
export default FamelyF;