import React from "react";
import Sizeplus from "./Sizeplus";
import Sizeminus from "./Sizeminus";
import TitlesEl from "./TitlesEl";
function CloseControl(props) {

  let type = "min"
  if(props.sizes === true){
    type = "max";
  }else{
    type = "min"
  }

  return (
    <div
    
      className={`sizes ${props.class} titlesBas`}
      onClick={() => {
        return (
          props.setsizes(props.sizes === true ? false : true),
          props.setpanelStyle({ position: "fixed", maxWidth: "100%" }),
          props.setActive((props.active === false) ? true : false),
          props.setSelectPanelDicplay(false)
        );
      }}
    >
      <TitlesEl type = {type}/>
      {props.sizes === true ? <Sizeplus /> : <Sizeminus />}
    </div>
  );
}
export default CloseControl;
