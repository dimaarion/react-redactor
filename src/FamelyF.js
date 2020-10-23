import React, { useState, useEffect }  from "react";
import './css/fontsFamely.css'
function FamelyF(props) {
  let n = ["Georgia", "Roboto", "Arial", "Montserrat", "Krona One"];
  const [nf, setnf] = useState('Georgia');
  useEffect(() => {
    setnf(props.fontFm)

  }, [props.fontFm]);
  return (
   <div className="col-sm-2 form-group text-left p-0">
      <ul id="fontsTxtFamely">
        <li>{nf}
          <ul>
            {n.map((x) => <li key={x} onClick={() => { props.fontsFm(props.ititalTegs, props.items, x);setnf(x) }}>{x}</li>)}
          </ul>
        </li>
      </ul>
          </div>
  );
}
export default FamelyF;