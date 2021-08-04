import React from "react";
import TitlesEl from "./TitlesEl";
function Lineright(props) {
  return (
    <td className=" text-left titlesBas">
      <TitlesEl type="Выравнивание по правому краю" />
      <button
        type="button"
        className={"bi bi-justify-left " + props.itemsLine + "-right"}
      >
        <svg
          style={props.style}
          onClick={() => {
            props.aligns(props.find, props.items, props.a);
            props.setitemsLine(props.a);
            props.setActive(props.active === false ? true : false);
            props.setSelectPanelDicplay(false);
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
      </button>
    </td>
  );
}
export default Lineright;
