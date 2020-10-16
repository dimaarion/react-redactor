import React, { useState, useEffect } from "react";
function Panel(props) {
  return (
    <div>
      <div className="col row">
        <div className="col form-group">
          <select>
            {["Tahoma", "Verdana", "Arial"].map((font, i) => (
              <option key={i + 14}>{font}</option>
            ))}
          </select>
          <select>
            {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
              font => (
                <option key={font}>{font}</option>
              )
            )}
          </select>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-justify-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div className="col">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-justify"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div className="col">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-justify-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-1 images" title="Добавить изображение">
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
        <div className="col form-group">
          <select>
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
