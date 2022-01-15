import React, { useState} from "react";
import "./css/fontsFamely.css";
function FamelyF(props) {
  let n = ["Georgia", "Roboto", "Arial", "Montserrat", "Krona One"];
  const [nf, setnf] = useState("Georgia");
  return (
    <div className="col-sm-2 form-group text-left p-0 fontsFm">
      <ul id="fontsTxtFamely">
        <li>
          {nf}
          <ul>
            {n.map((x, i) => (
              <li
                key={x + i}
                onClick={() => {
                  props.fontsFm(props, x);
                  setnf(x);
                  props.setActive(props.active === false ? true : false);
                  props.setSelectPanelDicplay(false);
                }}
              >
                {x}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default FamelyF;
