import React from "react";

function Headers(props) {
  return (
       <div className="col-2 form-group">
          <select className="form-control custom-select">
            {[
              { n: "Заголовок", t: "div", type: "unstyled***" },
              { n: "Заголовок 1", t: "h1", type: "header-one" },
              { n: "Заголовок 2", t: "h2", type: "header-two" }
            ].map((font, i) => (
              <option
                key={i + 33}
                onClick={() => {
                  props.settextbl(font.t);
                  props.setitemss(props.items);
                }}
              >
                {font.n}
              </option>
            ))}
          </select>
        </div>
  );
}
export default Headers;
