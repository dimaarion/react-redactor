import React from "react";

function Headers(props) {
  return (
       <div className="col-sm-2 form-group p-0">
      <select className="form-control custom-select" onChange={(e) => props.izmtegs(props.ititalTegs, e.target.value, 't', props.items)}>
            {[
              "div",
              "p" ,
              "h1",
              "h2"
            ].map((font, i) => (
              <option
                key={i + 33}
                onClick={() => {
                  
                  props.setitemss(props.items);
                }}
              >
                {font}
              </option>
            ))}
          </select>
        </div>
  );
}
export default Headers;
