import React from "react";
import TitlesEl from "./TitlesEl";

function FloatImage(props) {
  let active = { border: "solid 3px #cccccc" };
  let left = {};
  let right = {};
  let none = {};
  if (props.imgFloat === "left") {
    left = active;
  }
  if (props.imgFloat === "right") {
    right = active;
  }
  if (props.imgFloat === "none" || !props.imgFloat) {
    none = active;
  }
  return (
    <div className="row pb-2 ">
      <div className="col-sm text-center titlesBas">
        <TitlesEl type="Обтикание текстом справа" left={80} top={-80} />
        <svg
          style={left}
          onClick={() => {
            props.setimgFloat("left");
          }}
          width="2em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div className="col-sm text-center titlesBas">
        <TitlesEl type="Без обтикания текстом" left={80} top={-80} />
        <svg
          style={none}
          onClick={() => {
            props.setimgFloat("none");
          }}
          width="2em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div className="col-sm text-center titlesBas">
        <TitlesEl type="Обтикание текстом слева" left={80} top={-80} />
        <svg
          style={right}
          onClick={() => {
            props.setimgFloat("right");
          }}
          width="2em"
          viewBox="0 0 16 16"
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
  );
}
export default FloatImage;
