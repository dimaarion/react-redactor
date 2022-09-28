import React, { useState, useEffect } from "react";
import Inputs from "./Inputs";
import { selectedStyles } from "./action";
import "./css/link.css";
function LinkRemove(props) {
  const [links, setlinks] = useState("");

  return (
    <div className="col-sm text-right">
      <Inputs
        name="Ссылка"
        divStyle={{ position: "absolute" }}
        type="text"
        col="sm"
        c="link"
        cange={setlinks}
      />
      <button
        type="button"
        className="closeLinck"
        onClick={() => {
          // props.types(links);
          props.setstate({ link: false });
          props.setActive(props.active === false ? true : false);
          selectedStyles(props, "a", links);
          props.setSelectPanelDicplay(false);
        }}
        style={{
          cursor: "pointer",
          border: "none",
          position: "absolute",
          zIndex: 10000
        }}
      >
        ok
      </button>
    </div>
  );
}
export default LinkRemove;
