import React, { useEffect } from "react";
import Sizeplus from "./Sizeplus";
import Sizeminus from "./Sizeminus";
import TitlesEl from "./TitlesEl";
function CloseControl(props) {
  let type = "Уменьшить";
  if (props.sizes === true) {
    type = "Увеличить";
  } else {
    type = "Уменьшить";
  }
  useEffect(() => {
    if (!props.sizes) {
      props.setpanelStyle({
        position: "fixed",
        maxWidth: "100%",
        margin: "auto",
        top: "140px",
        height: "100%"
      });
    } else {
      props.setpanelStyle({
        position: "absolute",
        maxWidth: "100%",
        marginTop: "-722px"
      });
    }
  }, [props.sizes]);
  return (
    <div
      className={`sizes ${props.class} titlesBas`}
      onClick={() => {
        return (
          props.setsizes(props.sizes === true ? false : true),
          props.setActive(props.active === false ? true : false),
          props.setSelectPanelDicplay(false)
        );
      }}
    >
      <TitlesEl type={type} />
      {props.sizes === true ? <Sizeplus /> : <Sizeminus />}
    </div>
  );
}
export default CloseControl;
