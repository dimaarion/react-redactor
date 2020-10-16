import React from "react";

function Fonts(props) {
  return (
    <div className="col-4 p-0">
      <select
        className=" col form-control custom-select"
        onChange={e => props.setfontPt(e.target.value)}
      >
        {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
          font => (
            <option key={font}>{font}</option>
          )
        )}
      </select>
    </div>
  );
}
export default Fonts;
