import React from "react";
import TitlesEl from "./TitlesEl";
function ListUl(props) {
  return (
    <div className={`${props.class} titlesBas`}>
      <TitlesEl type="Маркированный список" />
      <button type="button">
        <svg
          onClick={() => {
            if (props.find.className != undefined) {
              if (!props.find.className.match(props.baseSelector)) {
                props.listItem(props.find, props.items, "ul", "li");
                props.setActive(props.active === false ? true : false);
                props.setSelectPanelDicplay(false);
              }
            }

          }}
          width="2em"
          viewBox="0 0 16 16"
          className="bi bi-list-ul"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
      </button>
    </div>
  );
}
export default ListUl;
