import React from "react";
import Sizeplus from "./Sizeplus";
import Sizeminus from "./Sizeminus";
function CloseControl(props) {
  return (
    <div
      className="sizes"
      onClick={() => {
        return (
          props.setsizes(props.sizes === true ? false : true),
          props.setpanelStyle({ position: "fixed", maxWidth: "100%" }),
          props.setActive((props.active === false) ? true : false),
          props.setSelectPanelDicplay(false)
        );
      }}
    >
      {props.sizes === true ? <Sizeplus /> : <Sizeminus />}
    </div>
  );
}
export default CloseControl;
