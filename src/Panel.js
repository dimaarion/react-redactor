import React, { useState, useEffect } from "react";
import Fonts from "./Fonts";
import Aligns from "./Aligns";
function Panel(props) {
  return (
    <div className="container">
      <div className="col row">
        <div className="col-3 row">
         
          <Fonts setfontPt={props.setfontPt} />
        </div>
      <Aligns/>
        <div
          className="col-1 text-center h-22 images"
          title="Добавить изображение"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-image"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14.002 2h-12a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12z"
            />
            <path d="M10.648 7.646a.5.5 0 0 1 .577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z" />
            <path
              fillRule="evenodd"
              d="M4.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            />
          </svg>
        </div>
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
      </div>
    </div>
  );
}
export default Panel;
