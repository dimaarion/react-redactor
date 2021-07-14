import React, { useState, useEffect } from "react";
import "./css/fonts.css";
function Fonts(props) {
  const [nf, setnf] = useState(14);

  let n = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  useEffect(() => {
    if (props.find.style) {
      if (props.find.style.fontSize) {
        setnf(props.find.style.fontSize.replace("pt", " "));
      } else {
        setnf(14);
      }
    }
  }, [props.find]);
  return (
    <div className="text-left" style={{ width: "105px" }}>
      <ul id="fontsTxt">
        <li>
          {nf}
          <ul>
            {n.map((x) => (
              <li
                key={x}
                onClick={() => {
                  props.fonts(props.find, props.items, x);
                  setnf(x);
                  props.setActive((props.active === false) ? true : false);
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
export default Fonts;
